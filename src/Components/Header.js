import React from 'react';
import LogoAxioma from "./icons/LogoAxioma";

const Header = ({openPopup}) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo__container">
                    <LogoAxioma/>
                </div>
                <div className="header__text__container">
                    <a href="#weDo" className="header__text">Що ми робимо</a>
                    <a href="#questions" className="header__text">Часто задавані питання</a>
                    <a href="#contacts" className="header__contact">Контакти</a>
                    <button onClick={()=>openPopup()} className="header__btn">Написати нам</button>
                </div>
            </div>
        </header>
    );
};

export default Header;