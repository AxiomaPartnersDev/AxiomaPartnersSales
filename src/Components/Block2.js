import React from 'react';
import Icon1 from "./icons/icon-1";
import Icon2 from "./icons/Icon-2";
import Icon3 from "./icons/icon-3";
import Card from "./Card";
import Box1 from "./Parallax/Box1";

const Block2 = () => {
    const state = [
        {
            id:1,
            icon:<Icon1/>,
            title:"Реклама",
            text:"Команда досвідчених спеціалістів налаштує для вашого товару якісну рекламу на популярних інтернет платформах та соцмережах (Google, Facebook, Instagram та ін.)"
        }, {
            id:2,
            icon:<Icon2/>,
            title:"маркетинг",
            text:"Окрім просування та реалізації товарів, ми займемося підготовкою та оформленням Вашого сайту, до чого будуть залучені професійні копірайтери, дизайнери та розробники. \n"
        },{
            id:3,
            icon:<Icon3/>,
            title:"продаж товару",
            text:"Вам більше не доведеться займатися безпосереднім продажом товару та прийняттям платежів. Axioma Partners візьме це на себе. Мати для цього ФОП - необов’язково!"
        },
    ];
    return (
        <div id="weDo" className="block2">
            <h3 className="block2__title">Що робимо ми?</h3>
            <div className="card__container">
            {state.map((item,index)=>(
                <React.Fragment key={index}>
                    <Card  item={item}/>
                </React.Fragment>
            ))}
            </div>
            <Box1/>
        </div>
    );
};

export default Block2;