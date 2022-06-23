import React from 'react';
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block5 from "./Block5";
import { ParallaxProvider} from "react-scroll-parallax";

const Main = () => {
    return (
        <main className="main">
            <ParallaxProvider>
            <Block1/>
            <div className="main__container">
                <Block2/>
                <Block3/>
                <Block4/>
                <Block5/>
            </div>
        </ParallaxProvider>
        </main>
    );
};

export default Main;