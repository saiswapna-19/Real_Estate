import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import PropertyListing from "./pages/PropertyListing";
import PropertySearch from "./pages/PropertySearch";
import PropertyDetails from "./pages/PropertyDetails";
import AgentDetails from "./pages/AgentDetails";
import LoginSignup from "./pages/LoginSignup";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertyListing />} />
          <Route path="/search" element={<PropertySearch />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/agent/:id" element={<AgentDetails />} />
          <Route path="/login-signup" element={<LoginSignup />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}