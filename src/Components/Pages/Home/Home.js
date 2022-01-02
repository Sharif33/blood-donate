import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner1 from '../Banner/Banner1';
import Donors from '../Donor/Donors';

const Home = () => {
    return (
        <div>
            <Header/>
            <div style={{paddingTop:"60px"}}>
                <Banner1/>
            </div>
            <Donors/>
        </div>
    );
};

export default Home;