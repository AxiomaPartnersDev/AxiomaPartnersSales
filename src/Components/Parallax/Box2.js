import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Box2img from "../../assets/box/Box2.png";

const Box2 = () => {
    return (
        <div className="box2__container">
        <Parallax speed={20}>
            <img className="box__img box__img2" src={Box2img} alt=""/>
        </Parallax>
        </div>
    );
};

export default Box2;