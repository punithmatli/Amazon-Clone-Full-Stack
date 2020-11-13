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
                    <Product
                        title="Think Like a Monk"
                        image="https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg"
                        price={309}
                        rating={5}
                    />
                    <Product
                        title="Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)"
                        image="https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SL1500_.jpg"
                        price={18499}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="Safari 77 cms Black Hardsided Luggage"
                        image="https://images-na.ssl-images-amazon.com/images/I/61%2BnWHOURiL._SL1500_.jpg"
                        price={2999}
                        rating={4}
                    />
                    <Product
                        title="Apple Macbook Pro (16inch, Intel core i7)"
                        image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
                        price={172899}
                        rating={5}
                    />
                    <Product
                        title="Cadbury Celebrations Chocolate Gift Pack, 281 g"
                        image="https://images-na.ssl-images-amazon.com/images/I/71WiyzH504L._SL1500_.jpg"
                        price={300}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette"
                        image="https://images-na.ssl-images-amazon.com/images/I/81XEPquUw3L._SL1500_.jpg"
                        price={599}
                        rating={4}
                    />
                </div>
            </div>
        </div >
    )
}

export default Home