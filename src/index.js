import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Picture from './components/Picture';
import Info from './components/Info';


const props = {
    blogName: `Marco Guido's Blogs`,
    page1: 'Home',
    page2: 'Archives',
    page3: 'About'
    };

ReactDOM.render( 
    <React.StrictMode>
        <Header 
            blogName={props.blogName}
            page1={props.page1}
            page2={props.page2}
            page3={props.page3}
        />
        <Info 
                
        />
        <Picture />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);


