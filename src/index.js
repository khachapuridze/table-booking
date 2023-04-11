import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from './scrollToTop';
import './index.css';
import './css/main.scss';

import Home from './pages/Home';
import TableList from './pages/TableList';
import RestaurantInner from './pages/RestaurantInner';
import RestaurantList from './pages/RestaurantList';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tables" element={<TableList />} />
            <Route path="/r/:id" element={<RestaurantInner />} />
            <Route path="/s" element={<RestaurantList />} />
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
