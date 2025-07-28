import React from 'react';
import Hero from './Component/Hero';
import Feature from './Component/Feature';
import Choose from './Component/Choose';
import Trust from './Component/Trust';
import Customer from './Component/Customer';
import CustomerSupport from './Component/CustomerSupport';
import Blog from './Component/Blog';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Feature></Feature>
            <Choose></Choose>
            <Trust></Trust>
            <Customer></Customer>
            <CustomerSupport></CustomerSupport>
            <Blog></Blog>
        </div>
    );
};

export default Home;