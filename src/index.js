import ReactDom from 'react-dom';
import React from 'react';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('full-stack'));