import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = ({ isHomePage }) => (
    <> 
        {!isHomePage && (
            <header>
               <NavLink to='/' className="home-link">
                   Home
               </NavLink> 
               <Navigation />
            </header>
        )}
    
    </>
);

Layout.prototypes = {
    isHomepage: PropTypes.bool,
};

Layout.defaultProps = {
    isHomePage: false,
}

export default Layout;