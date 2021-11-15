import React from 'react';
import CategoryPage from 'Category/CategoryPage';
import { Route, Router } from 'react-router-dom';

const App = () => {
  return (
    <Router >
      <div>
        <Route path="/" exact component={CategoryPage} />
      </div>
    </Router>
  );
};

export default App;
