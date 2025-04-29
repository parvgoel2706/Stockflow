import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/product/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import PageNotFound from "./landing_page/PageNotFound";
import Equity from "./landing_page/pricing/Equity";
import Currency from "./landing_page/pricing/Currency";
import Commodity from "./landing_page/pricing/Commodity";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />}>
        <Route index element={<Equity />} />
        <Route path="equity" element={<Equity />} />
        <Route path="currency" element={<Currency />} />
        <Route path="commodity" element={<Commodity />} />
      </Route>
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
