import React from 'react';
import ArrowIcon from "./icons/ArrowIcon";

const Block5 = () => {
    return (
        <div className="block5">
            <h2 className="block5__title">Масштабуйте свій бізнес разом із нами вже сьогодні</h2>
            <div className="block5__btn__container">
                <button className="block5__btn">Написати нам <span className="arrow__span"> <ArrowIcon/></span> </button>
            </div>
        </div>
    );
};

export default Block5;