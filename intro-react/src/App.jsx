import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer'; 
import About from "./components/About";
import Home from "./components/Home";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PricingPage from "./pages/PricingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tentang" element={<About/>} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
