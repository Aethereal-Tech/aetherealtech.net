import "./index.css";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Services from "./components/Services";
import { Footer } from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/case-studies") {
      setCurrentPage("case-studies");
    } else if (path === "/blog") {
      setCurrentPage("blog");
    } else {
      setCurrentPage("home");
    }
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/case-studies") {
        setCurrentPage("case-studies");
      } else if (path === "/blog") {
        setCurrentPage("blog");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <Hero onNavigate={setCurrentPage} currentPage={currentPage} />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
