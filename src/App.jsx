import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar"
import OfferDetails from "./components/offersdatails/OffersDatails";
import { UserForm } from "./components/UserForm";
import { useAuth } from "./context/AuthContext";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { LoginPage } from "./pages/LoginPage";
import OffersPage from "./pages/offers/OffersPage";
import Register from "./pages/register/Register";
import { isTokenValid } from "./services/ApiService";
import OfferCreate from "./pages/offers/OfferCreate";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const AuthRoute = ({ component: Component }) => {
  const { token } = useAuth();

  return isTokenValid(token) ? <Component /> : <Navigate to="/login" />;
};

function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Home />} />
        <Route path="/save-user" element={<AuthRoute component={UserForm} />} />
        <Route path="/user/:id" element={<AuthRoute component={UserForm} />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers/create" element={<OfferCreate />} />
        <Route path="/offers/:id" element={<OfferDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
