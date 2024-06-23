import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(price);
  }, [cart]);

  useEffect(() => {
    if (success) {
      const successTimer = setTimeout(() => {
        setSuccess(null);
      }, 1500);

      return () => clearTimeout(successTimer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const errorTimer = setTimeout(() => {
        setError(null);
      }, 2000);

      return () => clearTimeout(errorTimer);
    }
  }, [error]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setError(`Item is already in the cart.`);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setSuccess(`Item is added to cart.`);
    }
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    setSuccess(`Item is removed from cart.`);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        success,
        error,
        totalPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
