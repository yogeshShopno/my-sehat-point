import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="page-wraper">
            {/* <Navbar /> */}
            <main className="page-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
