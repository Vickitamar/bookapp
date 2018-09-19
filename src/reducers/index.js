import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import Books2017 from './reducer_books_2017';

const rootReducer = combineReducers({
  books2018: BooksReducer, //state or key: name of reducer
  activeBook: ActiveBook,
  books2017: Books2017
});

export default rootReducer;