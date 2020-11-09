import React from 'react';
import Product from '../Product/Product';
import Container from 'react-bootstrap/Container'

import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Join Prime"
                />
                <img
                    className="home__imageMobile"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Rec_Mobile_GW_Hero_ENGLISH._CB416350156_SY367_FMwebp_.jpg"
                    alt="Join Prime"
                />
                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
        </div>
        </div >
    )
}

export default Home