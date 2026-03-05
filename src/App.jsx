import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserForm } from "./components/UserForm";
import OffersPage from "./components/offers/OffersPage";
import OfferDetails from "./components/offersdatails/OffersDatails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OffersPage />} />
        <Route path="/offers/:id" element={<OfferDetails />} />
        <Route path="/save-user" element={<UserForm />} />
        <Route path="/user/:id" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
