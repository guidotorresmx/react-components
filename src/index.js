import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Picture from './components/Picture';
import Info from './components/Info';

ReactDOM.render( 
    <React.StrictMode>
        <Header />
        <Info />
        <Picture />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);


