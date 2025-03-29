import { Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import MainPage from "./Pages/MainPage/MainPage";
import './App.css';
import ProtectedRoute from "./Pages/ProtectedRoute";
import Inventory from "./Pages/Inventory/Inventory";

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