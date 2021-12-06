import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Button from './Button/Button';
import './style/Hero.scss';
// import Video from './videos/video-2.mp4';

function Hero() {
    return (
        <div className="hero-container">
            {/* <video src={Video} autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get started
                </Button>

                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER <FaPlay className="fa-play-circle " />
                </Button>
            </div>
        </div>
    );
}

export default Hero;
