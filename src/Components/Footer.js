import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id="contacts">
            <div className="footer__container">
                <div className="footer__copyright">
                    <p className="footer__copyright__text footer__text__bold">copyight © 2022</p>
                    <p className="footer__copyright__text">Axioma Partners</p>
                </div>
                <div className="footer__contacts">
                    <p className="footer__contact__text footer__text__bold">Контакти:</p>
                    <p className="footer__contact__text">axiomapartners@gmail.com</p>
                </div>
                <div className="footer__inst">
                    <p className="footer__inst__text footer__text__bold">Ми у інстаграм:</p>
                    <p className="footer__inst__text">@axiomapartners</p>
                </div>
                <div className="footer__location">
                    <p className="footer__location__text footer__text__bold">Київ</p>
                    <p className="footer__location__text">Україна</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;