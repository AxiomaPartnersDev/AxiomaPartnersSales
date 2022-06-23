import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Box3img from "../../assets/box/Box3.png";

const Box3 = () => {
    return (
        <div className="box3__container">
        <Parallax speed={20}>
            <img className="box__img" src={Box3img} alt="box3"/>
        </Parallax>
        </div>
    );
};

export default Box3;