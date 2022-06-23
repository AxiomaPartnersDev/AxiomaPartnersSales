import React from 'react';
import AccordionBlock from "./Accordion";
import Box3 from "./Parallax/Box3";

const Block4 = () => {
    return (
        <div id="questions" className="block4">
            <h3 className="block4__title">FAQ - Часто задавані питання</h3>
            <AccordionBlock/>
            <Box3/>
        </div>
    );
};

export default Block4;