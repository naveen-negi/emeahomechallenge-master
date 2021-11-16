import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import ProductDetailPage from './ProductDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="productDetails" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
