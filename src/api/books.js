import axios from 'axios';

const url = relativePath => {
  return `${process.env.REACT_APP_HOST_URL}/${relativePath}`;
};

export const fetchBooks = () => {
  return axios.get(url('api/books'));
};
