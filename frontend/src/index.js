import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {loadAllTrendingBooks} from "./components/redux/trendingBooksRedux/midleware"
import {loadAllBooksByGenre} from "./components/redux/BookByGenre/midleware"
// import {loadAllFictionalTrendingBooks} from "./components/redux/FictionBookRedux/middleWare";
// import {loadAllNonFictionalTrendingBooks} from "./components/redux/NonFictionBookRedux/middleWare"
const store = configureStore();
store.dispatch(loadAllTrendingBooks());
store.dispatch(loadAllBooksByGenre());

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
