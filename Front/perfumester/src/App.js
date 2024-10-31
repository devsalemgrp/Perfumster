import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer2 from "./Components/Footer2/footer2";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import ForHer from "./Pages/ForHer/forHer";
import ForHim from "./Pages/ForHim/forHim";
import New from "./Pages/New/new";
import Subscription from "./Pages/Subscription/subscription";
import AddToCart from "./Pages/AddToCart/addToCart";
import MyCart from "./Pages/Cart/myCart";
import Profile from "./Pages/Profile/profile";
import Auth from "./Pages/Auth/auth";
import AboutUs from "./Pages/AboutUs/aboutUs";
import PageNotFound from "./Pages/PageNotFound/pageNotFound";
import AllProducts from "./Pages/Products/allProducts";
import Checkout from "./Pages/Checkout/checkout";
import { useEffect, useState } from "react";
import CreateAccount from "./Components/createAccount";
import Modal from "react-modal";
import ContactUs from "./Pages/ContactUs/contactUs";
import ScrollToTop from "./Components/scrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      openModal();
    }, 3000);
  }, []);

  Modal.setAppElement(document.getElementById("root"));

  return (
    <div className="helvetica">
      <CreateAccount
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/for-her" element={<ForHer />} />
        <Route path="/for-him" element={<ForHim />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer2 />
      <ToastContainer
        position="top-right" // You can change the position
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
