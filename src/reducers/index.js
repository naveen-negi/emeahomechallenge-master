import { combineReducers } from 'redux';
import produce from 'immer';

const questionReducer = produce((draft = {}, action) => {
  switch (action.type) {
    case 'LOAD_ALL_BOOKS':
      return { ...draft, books: action.payload };
  }
  return draft;
});

export default combineReducers({ data: questionReducer });
