import { Routes, Route } from "react-router-dom";
import { NavbarDemo } from "./components/NavbarDemo";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import AlbumsPage from "./pages/AlbumsPage";

function App() {
  return (
    <>
      <div className="sticky top-0 z-[200]">
        <NavbarDemo />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
      </Routes>
    </>
  );
}

export default App;
