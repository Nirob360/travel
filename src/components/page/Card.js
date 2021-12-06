import React from 'react';
import image5 from '../images/img-5.jpg';
import image6 from '../images/img-6.jpg';
import image7 from '../images/img-7.jpg';
import image8 from '../images/img-8.jpg';
import image9 from '../images/img-9.jpg';
import '../style/Card.scss';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image9}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src={image8}
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={image7}
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label="Mystery"
                            path="/services"
                        />
                        <CardItem
                            src={image6}
                            text="Experience Football on Top of the Himilayan Mountains"
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem
                            src={image5}
                            text="Ride through the Sahara Desert on a guided camel tour"
                            label="Adrenaline"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
