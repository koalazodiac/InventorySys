import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css"; // Add styles for the sidebar

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={() => navigate("/main")}>Dashboard</li>
        <li onClick={() => navigate("/inventory")}>Inventory</li>
        <li onClick={() => navigate("/reports")}>Reports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
