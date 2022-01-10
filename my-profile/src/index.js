import React from "react";
import ReactDom from "react-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import Article from './components/Article'
import articles from "./articles";
import styles from './index.css'

const App = () => {

    return (
        <div>
            <NavBar />
            <Accordion />
            <div className='a'>
            {
                articles.map((article, index) => {
                    return (
                        <Article  key={index} img={article.img} title={article.title} desc={article.desc} ></Article>
                    )
                })
            }
            </div>
            <Footer />
        </div>
    )

}


ReactDom.render(
    <App/>,
    document.querySelector('#root')
)