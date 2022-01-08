import React from "react";
import ReactDom from "react-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import Button from "./components/Button";

const App = () => {

    return (
        <div>
            <NavBar />
            <Accordion />
            <Button text={'LEER MÁS'}/>
            <Footer />
        </div>
    )

}


ReactDom.render(
    <App/>,
    document.querySelector('#root')
)