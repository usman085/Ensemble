import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Visit from "./pages/Visit";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Nav />
      <main className="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <aside className="pitch-watermark" aria-label="Pitch concept by Syed Usman Qadeer">
        <span>Pitch concept by</span>
        <strong>Syed Usman Qadeer</strong>
      </aside>
    </div>
  );
}
