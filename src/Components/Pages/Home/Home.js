import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner1 from '../Banner/Banner1';

const Home = () => {
    return (
        <div>
            <Header/>
            <div style={{paddingTop:"60px"}}>
                <Banner1/>
            </div>
            
            <h2>This is home</h2>
        </div>
    );
};

export default Home;