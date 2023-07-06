import React, { useState } from "react";
import Nav from "./Nav";
import { Typography, Box, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addToCart = () => {
    if (newItem.trim() !== "") {
      setCartItems((prevItems) => [...prevItems, newItem]);
      setNewItem("");
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  return (
    <div>
      <Nav />
      <Box marginTop={14} display="flex" justifyContent="center" alignItems="center">
        <Box>
        <Typography variant="h2" component="h1" align="center" p={3}>
          Shopping Cart
        </Typography>
        <TextField
          label="Add Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={addToCart}>
          Add to Cart
        </Button>
        <Typography variant="body1" align="center" p={1}>
          Total Items: {cartItems.length}
        </Typography>
        <List sx={{ marginTop: 2 }}>
          {cartItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={item} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item)}>
                  <DeleteIcon color="secondary"/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
      </Box>
    </div>
  );
};

export default ShoppingCart;
