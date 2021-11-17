import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import ProductDetailPage from './ProductDetailPage';
import Menu from './Menu';
import Cart from './Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="productDetails" element={<ProductDetailPage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
