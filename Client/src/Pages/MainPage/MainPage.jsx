import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css"; // Ensure you create this CSS file
import Sidebar from "../../Sidebar/Sidebar"; 

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove authentication token
    navigate("/"); // Redirect to login page
  };


  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <h1>Welcome to Peter's Inventory</h1>
        <p>This is the main dashboard where you can manage your inventory.</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default MainPage;
