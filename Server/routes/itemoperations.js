const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Fetch all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
});

// Add a new item
router.post('/', async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const newItem = new Item({ name, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding item', error });
  }
});

// Remove an item
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Error removing item', error });
  }
});

// Restock an item
router.put('/:id/restock', async (req, res) => {
  const { quantity } = req.body;
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      item.quantity += quantity;
      await item.save();
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error restocking item', error });
  }
});

module.exports = router;
