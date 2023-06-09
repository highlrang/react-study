import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductList from './product/ProductList';
import NotificationList from './notification/NotificationList';
import Counter from './count/Counter';
import Accommodate from './member/Accommodate';
import ConfirmButton from './etc/ConfirmButton';
import DarkOrLight from './etc/context/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {}, 1000);
root.render(
    <React.StrictMode>
      <DarkOrLight />
      <ProductList />
      <NotificationList />
      <Counter />
      <Accommodate />
      <ConfirmButton />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
