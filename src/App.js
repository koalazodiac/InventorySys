import { Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/Pages/LoginSignup/LoginSignup";
import MainPage from "./Components/Pages/MainPage/MainPage";
import './App.css';
import ProtectedRoute from "./Components/Pages/ProtectedRoute";
import Inventory from "./Components/Pages/Inventory/Inventory";

function App() {
  return (
      <Routes>
        <Route path="/" element={
        <div className="login-container">
    <header className="App-header">
      Peter's Inventory
    </header>
    <LoginSignup /></div>} />
        <Route path="/main" element={<ProtectedRoute element={<MainPage />} />} />
      <Route path="/inventory" element={<ProtectedRoute element={<Inventory />} />} />
      </Routes>
  );
}

export default App;