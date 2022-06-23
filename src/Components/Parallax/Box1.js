import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Box1img from "../../assets/box/Box1.png";

const Box1 = () => {

    return (
        <div className="box1__container">
        <Parallax speed={20} >
            <img className="box__img" src={Box1img} alt=""/>
         </Parallax>
        </div>
    );
};

export default Box1;