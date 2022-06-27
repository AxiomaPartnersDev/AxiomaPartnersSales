import React, { useState} from 'react';
import InputMask from 'react-input-mask';

const Form = ({popup, closePopup}) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [Nick, setNick] = useState("");
    const [product, setProduct] = useState("");
    const [thank,setThank] = useState(false);
    const onChangeMask = (e) => {
        let numb = e.target.value.replace(/\D/g, '').replace(/^7/, '8');
        setMobile(numb)
    }
    /***************************
     * telegram send
     ***************************/

    const Send = (e) => {
        e.preventDefault();
        let numb = mobile.replace(/\D/g, '').replace(/^7/, '8');
        const chat_id = "-616051246"
        const parse_mode = "html";
        const textValue = '<p' + name + '"><b>' + product + '</b></p>';
        let fields = [
            '<b>Name</b>: ' + name,
            // '<b>Tel</b>: ' + state.tel,
            '<b>Tel</b>: ' + numb,
            '<b>Telegram nick</b>: ' + Nick,
            '<b>product</b>: ' + product,
        ]
        let msg = ''
        //проходимся по массиву и склеиваем все в одну строку
        fields.forEach(field => {
            msg += field + '\n'
        });
        //кодируем результат в текст, понятный адресной строке
        msg = encodeURI(msg)
        if (name === "" ) {
            console.log(numb.length)
            alert("поле ім’я не заповнено");
        } else if (numb.length < 12) {
            alert("не заповнено поле номера");
        } else {
            const requestOptionsPush = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {chat_id: chat_id, parse_mode: parse_mode, caption: textValue}
                )
            };
            fetch(`https://api.telegram.org/bot5567449879:AAFPX_bFofHde40lxjL2wMqYLVbv5YkNQpA/sendMessage?chat_id=-616051246&parse_mode=html&text=${msg}`, requestOptionsPush)
                .then(response => {
                    setName("");
                    setMobile("");
                    setNick("");
                    setProduct("");
                    setThank(true);
                    // console.log(response)
                    // window.location.href = "/"
                }).catch(error => {
                alert("відбулась помилка, спробуйте пізніше")
            });
        }
    };
    return (
        <div className={popup ? "popup active" : "popup"} onClick={() => closePopup()}>
            {!thank ?
                <div className="form__container" onClick={(e) => e.stopPropagation()}>
                    <h2 className="popup__title">Залишайте ваші данні</h2>
                    <p className="popup__text">Наш менеджер зв'яжеться з вами у найближчий час</p>
                    <form className="form" onSubmit={Send}>
                        <div className="form__inp__container">
                            <input placeholder="Ваше ім’я*" className="input"
                                   type="text" name={name} required value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                            <InputMask placeholder="Номер мобільного*"
                                       mask="+(380) 99-999-99-99"
                                       className="input"
                                       name={"tel"}
                                       value={mobile}
                                       onChange={(e) => onChangeMask(e)}
                                       required
                            />
                        </div>
                        <div className="form__inp__container">
                            <input type="text" onChange={(e) => setNick(e.target.value)} placeholder="Ваш телеграм*"
                                   className="input"
                                   name={Nick} required value={Nick}/>
                            <input type="text" onChange={(e) => setProduct(e.target.value)}
                                   placeholder="Посилання на ваш товар"
                                   className="input" name={product} value={product}/>
                        </div>
                        <button className="form__btn" type="submit">
                            Продовжити
                        </button>
                    </form>
                </div>
            :
            <div className="thank" >
                <p className="thank__subtitle">Успіх</p>
                <p className="thank__text">Дякуємо, ми звяжемось з вами найближчим часом</p>
                <button onClick={()=>closePopup()} className="thank__btn">ок</button>
            </div>
            }
        </div>
    );
};

export default Form;