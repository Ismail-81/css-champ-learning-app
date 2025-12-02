import { Route, Routes } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import Rules from "./Rules";
import AboutPage from "./AboutPage";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { Background, Color, FontSize, Border, Margin, Padding } from "./Pages";

export default function RoutePage() {
  return (
    <Routes>
      
      <Route path="/" element={<WelcomePage />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<Contact />} />

      
      <Route
        path="/background"
        element={
          <>
            <Header />
            <Sidebar />
            <Background />
            <Footer />
          </>
        }
      />

      <Route
        path="/color"
        element={
          <>
            <Header />
            <Sidebar />
            <Color />
            <Footer />
          </>
        }
      />

      <Route
        path="/font-size"
        element={
          <>
            <Header />
            <Sidebar />
            <FontSize />
            <Footer />
          </>
        }
      />

      <Route
        path="/border"
        element={
          <>
            <Header />
            <Sidebar />
            <Border />
            <Footer />
          </>
        }
      />

      <Route
        path="/margin"
        element={
          <>
            <Header />
            <Sidebar />
            <Margin />
            <Footer />
          </>
        }
      />

      <Route
        path="/padding"
        element={
          <>
            <Header />
            <Sidebar />
            <Padding />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
