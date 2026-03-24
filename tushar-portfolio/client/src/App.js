// Import order matters:
// 1. design-system  → tokens, reset, fonts, utilities
// 2. App.css        → layout shell
// 3. navbar.css     → navbar component styles (loaded globally so
//                     the fixed navbar renders before Home mounts)
import "./styles/design-system.css";
import "./App.css";
import "./components/navbar.css";

import Navbar from "./components/navbar";
import Home   from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
