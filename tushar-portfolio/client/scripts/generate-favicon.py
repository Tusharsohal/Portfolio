"""
Generate favicon.ico (multi-resolution) + favicon.svg from the portfolio brand.

Design:
  - Background:  smoky #11120D  (rounded-square)
  - Border:      copper #C9956C  (subtle frame)
  - Letters:     floral #FFFBF4  bold serif "TS"
  - Accent dot:  copper #C9956C  between T and S

Run:
  python3 client/scripts/generate-favicon.py
"""

import io
import struct
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

PUBLIC = Path(__file__).resolve().parent.parent / "public"
FONT_PATH = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"

SMOKY = (17, 18, 13, 255)      # #11120D
COPPER = (201, 149, 108, 255)  # #C9956C
FLORAL = (255, 251, 244, 255)  # #FFFBF4

ICO_SIZES = [16, 24, 32, 48, 64, 128, 256]


def render(size: int) -> Image.Image:
    """Render the favicon at a given pixel size."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Rounded-square background, slightly inset so the corners aren't clipped
    pad = max(1, round(size * 0.04))
    radius = round(size * 0.22)
    draw.rounded_rectangle(
        (pad, pad, size - pad - 1, size - pad - 1),
        radius=radius,
        fill=SMOKY,
    )

    # Copper hairline border
    border_w = max(1, round(size / 64))
    draw.rounded_rectangle(
        (pad, pad, size - pad - 1, size - pad - 1),
        radius=radius,
        outline=COPPER,
        width=border_w,
    )

    # "TS" monogram with copper dot between
    font_size = round(size * 0.55)
    try:
        font = ImageFont.truetype(FONT_PATH, font_size)
    except OSError:
        font = ImageFont.load_default()

    # Measure each glyph for accurate centering
    def measure(ch):
        bbox = draw.textbbox((0, 0), ch, font=font)
        return bbox[2] - bbox[0], bbox[3] - bbox[1], bbox

    t_w, t_h, t_bbox = measure("T")
    s_w, s_h, s_bbox = measure("S")

    dot_r = max(1, round(size * 0.03))
    gap = round(size * 0.08)

    total_w = t_w + gap + (dot_r * 2) + gap + s_w
    start_x = (size - total_w) // 2

    # Vertical centering — use cap-height (bbox top is non-zero in PIL)
    baseline_y = (size - t_h) // 2 - t_bbox[1] + round(size * 0.02)

    # Draw "T"
    draw.text((start_x - t_bbox[0], baseline_y), "T", fill=FLORAL, font=font)

    # Draw copper dot, centered vertically with the cap-height
    dot_cx = start_x + t_w + gap + dot_r
    dot_cy = (size // 2) + round(size * 0.04)
    draw.ellipse(
        (dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r),
        fill=COPPER,
    )

    # Draw "S"
    s_x = start_x + t_w + gap + (dot_r * 2) + gap - s_bbox[0]
    draw.text((s_x, baseline_y), "S", fill=FLORAL, font=font)

    return img


def write_multi_ico(images: list[Image.Image], path: Path) -> None:
    """
    Hand-build a multi-resolution ICO with PNG-compressed entries.
    Pillow's ICO writer doesn't honor pre-rendered append_images, so
    the small sizes lose crispness when auto-resized from the largest.
    Building the file manually preserves each rendered size.
    """
    pngs = []
    for img in images:
        buf = io.BytesIO()
        img.save(buf, format="PNG", optimize=True)
        pngs.append(buf.getvalue())

    count = len(images)
    header = struct.pack("<HHH", 0, 1, count)
    entries = bytearray()
    data = bytearray()
    offset = 6 + 16 * count

    for img, png in zip(images, pngs):
        w, h = img.size
        entries += struct.pack(
            "<BBBBHHII",
            0 if w >= 256 else w,    # width  (0 = 256)
            0 if h >= 256 else h,    # height
            0,                       # ncolors (0 = true-color)
            0,                       # reserved
            1,                       # planes
            32,                      # bpp
            len(png),                # size in bytes
            offset,                  # offset from start of file
        )
        data += png
        offset += len(png)

    path.write_bytes(header + bytes(entries) + bytes(data))


def main() -> None:
    images = [render(s) for s in ICO_SIZES]

    ico_path = PUBLIC / "favicon.ico"
    write_multi_ico(images, ico_path)
    print(f"Wrote {ico_path} ({ico_path.stat().st_size:,} bytes, {len(images)} sizes)")

    # Modern PNG favicons (browsers auto-pick the right size)
    for s in (192, 512):
        png_path = PUBLIC / f"favicon-{s}.png"
        render(s).save(png_path, format="PNG", optimize=True)
        print(f"Wrote {png_path}")

    # apple-touch-icon (iOS bookmarks / home-screen)
    apple_path = PUBLIC / "apple-touch-icon.png"
    render(180).save(apple_path, format="PNG", optimize=True)
    print(f"Wrote {apple_path}")


if __name__ == "__main__":
    main()
