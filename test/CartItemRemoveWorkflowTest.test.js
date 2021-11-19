import React from 'react';
import {
  queryByText,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from '../src/components/App';
import httpMock from './httpMock';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../src/reducers';
import userEvent from '@testing-library/user-event';

const enhancer = compose(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

test('should remove items from cart and display empty cart page', async () => {
  httpMock().setupMocks();

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const menuBtn = screen.getByTestId('menu-btn');
  expect(menuBtn).toBeInTheDocument();
  await new Promise(r => setTimeout(r, 1000));

  const detailsLink = await screen.getAllByText('Book in detail')[0];
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);

  const addToCartBtn = screen.getByTestId('add-to-cart-btn');
  expect(addToCartBtn).toBeInTheDocument();
  userEvent.click(addToCartBtn);

  const cartBtn = screen.getByTestId('cart-btn');
  expect(cartBtn).toBeInTheDocument();
  userEvent.click(cartBtn);

  const removeBtn = screen.getByRole('button', { name: /remove/i });
  userEvent.click(removeBtn);

  const emptyCart = screen.getByTestId('empty-cart');
  expect(emptyCart).toBeInTheDocument();
});
