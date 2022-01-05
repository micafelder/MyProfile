import React from "react";
import ReactDom from "react-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";

const App = () => {

    return (
        <div>
            <NavBar />
            <Accordion />
            <Footer />
        </div>
    )

}


ReactDom.render(
    <App/>,
    document.querySelector('#root')
)