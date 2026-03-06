
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { LandingPage } from "./pages/LandingPage"
import { Home } from "./pages/Home"
import { LoginPage } from "./pages/LoginPage"
import { useAuth } from "./context/AuthContext"
import { isTokenValid } from "./services/ApiService"

const AuthRoute = ({component: Component}) => {
  const { token } = useAuth();

  return isTokenValid(token) ? <Component /> : <Navigate to="/login" />
}

import OffersPage from "./components/offers/OffersPage";
import OfferDetails from "./components/offersdatails/OffersDatails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/users" element={<Home> <UserList /> </Home>}/>
        <Route path="/save-user" element={< AuthRoute component={UserForm} />}/>
        <Route path="/user/:id" element={< AuthRoute component={UserForm} />}/>
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/offers/:id" element={<OfferDetails />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
