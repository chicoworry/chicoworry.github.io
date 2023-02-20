import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import About from './sections/About';
import Showcase from './sections/Showcase';
import Footer from './sections/Footer';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Header />
        <div className='flex flex-col max-w-2xl mx-auto'>
            <About />
            <Showcase />
            <Footer />  
        </div>
    </React.StrictMode>,
)
