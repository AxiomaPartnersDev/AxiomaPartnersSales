import React from 'react';
import Icon4 from "./icons/Icon4";
import Icon5 from "./icons/Icon5";
import Icon6 from "./icons/Icon6";
import Card from "./Card";
import Box2 from "./Parallax/Box2";

const Block3 = () => {
    const state = [
        {
            id:1,
            icon:<Icon4/>,
            title:"виробництво",
            text:"Ви продовжуєте займатися улюбленою справою - виробництвом своїх унікальних товарів, які потім завдяки Axioma Partners побачать покупці із Європи та Америки."
        }, {
            id:2,
            icon:<Icon5/>,
            title:"відправка",
            text:"Все як завжди: після виробництва, Ви упаковуєте готовий товар та відправляєте його Новою Поштою."
        },{
            id:3,
            icon:<Icon6/>,
            title:"отримання коштів",
            text:"Після продажу товару Ви отримаєте кошти від Axioma Partners  зручним для Вас способом!"
        },
    ]
    return (
        <div className="block3">
            <h3 className="block3__title">Що робите ви?</h3>
            <div className="card__container">
                {state.map((item,index)=>(
                    <React.Fragment key={index}>
                        <Card  item={item}/>
                    </React.Fragment>
                ))}
            </div>
            <Box2/>
        </div>
    );
};

export default Block3;