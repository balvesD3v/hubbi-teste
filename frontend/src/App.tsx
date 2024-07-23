import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShipDetailsPage from "./pages/ShipDetailsPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import WeaponDetailsPage from "./pages/WeaponDetailsPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/weapons/:id"
          element={
            <PrivateRoute>
              <WeaponDetailsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/characters/:id"
          element={
            <PrivateRoute>
              <CharacterDetailsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/ships/:id"
          element={
            <PrivateRoute>
              <ShipDetailsPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
