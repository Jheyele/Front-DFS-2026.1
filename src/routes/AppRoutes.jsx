import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/LayoutTemp";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import OffersPage from "../pages/offers/OffersPage";
import OfferDetails from "../components/offersdatails/OffersDatails";
import Register from "../pages/register/Register";
import { LoginPage } from "../pages/LoginPage";
import { UserForm } from "../components/UserForm";

import AuthRoute from "./AuthRoute";

export default function AppRoutes() {

  /**
   * Aqui usamos uma rota "pai" com o Layout.
   * Todas as rotas dentro dela herdam a Navbar e Footer automaticamente.
   */

  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<Register />} />

        <Route path="/users" element={<Home />} />

        <Route
          path="/save-user"
          element={
            <AuthRoute>
              <UserForm />
            </AuthRoute>
          }
        />

        <Route
          path="/user/:id"
          element={
            <AuthRoute>
              <UserForm />
            </AuthRoute>
          }
        />

        <Route path="/offers" element={<OffersPage />} />

        <Route path="/offers/:id" element={<OfferDetails />} />

        <Route path="/sobre" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
}