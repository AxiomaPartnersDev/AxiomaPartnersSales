import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";

const App = () => {
    const [popup, setPopup] = useState(false);
    const openPopup = () => {
        setPopup(true);
    }
    const closePopup = () => {
        setPopup(false)
    }
    useEffect(()=>{
        console.log(popup)
    },[popup])
    return (
        <>
            <Header/>
            <Main
                  openPopup={openPopup}
                  closePopup={closePopup}/>
            <Footer/>
            <Form popup={popup} closePopup={closePopup}/>
        </>
    );
};

export default App;