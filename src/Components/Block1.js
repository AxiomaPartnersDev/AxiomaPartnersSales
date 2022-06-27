import React from 'react';
import ArrowIcon from "./icons/ArrowIcon";
import img from "../assets/main/img__top.png";

const Block1 = ({openPopup}) => {
    return (
        <div className="block1">
            <div className="block1__text__container">
                <h3 className="block1__title">Продавай свої товари в Європі вже сьогодні</h3>
                <img className="block1__img__text__container" src={img} alt="image"/>
                <p className="block1__text">У вас є власна справа і ви плануєте продавати свої товари на Заході ? Axioma
                    Partners допоможе вам масштабувати свій бізнес на ринки USA/CA/Europe </p>
                <button onClick={()=>openPopup()} className="block1__btn">Написати нам <span className="arrow__span"><ArrowIcon/></span></button>
            </div>
            <div className="block1__img__container">
                <img className="block1__img" src={img} alt="image"/>
            </div>
        </div>
    );
};

export default Block1;