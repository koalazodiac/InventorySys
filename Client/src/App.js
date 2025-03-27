import { Routes, Route } from "react-router-dom";
import LoginSignup from "./src/Components/Pages/LoginSignup/LoginSignup";
import MainPage from "./src/Components/Pages/MainPage/MainPage";
import './App.css';
import ProtectedRoute from "./src/Components/Pages/ProtectedRoute";
import Inventory from "./src/Components/Pages/Inventory/Inventory";

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