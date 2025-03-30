import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../../Components/Sidebar/Sidebar"; 
import "./Inventory.css";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0 });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/items");
      console.log('Item added:', response.data);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/items", newItem);
      console.log('Item added:', response.data);
      setNewItem({ name: '', quantity: 0 });
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
        await axios.delete(`http://localhost:5001/api/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleRestockItem = async (id, quantity) => {
    try {
      await axios.put(`http://localhost:5001/api/items/${id}/restock`, { quantity });
      fetchItems();
    } catch (error) {
      console.error('Error restocking item:', error);
    }
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <div>
        <h1>Inventory Management</h1>
        <div>
            <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
            type="number"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value, 10) })}
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
        <ul>
            {items.map((item) => (
            <li key={item._id}>
                {item.name} - Quantity: {item.quantity}
                <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
                <button onClick={() => handleRestockItem(item._id, 10)}>Restock 10</button>
            </li>
            ))}
        </ul>
        </div>
    </div>
    </div>
  );
};

export default Inventory;
