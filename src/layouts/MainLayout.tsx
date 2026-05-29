import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
