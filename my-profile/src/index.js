import React from "react";
import ReactDom from "react-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import Article from './components/Article'
import articles from "./articles";
import styles from './index.css';
import Route from './components/Route'

const App = () => {

    return (
        <div>
            <NavBar />
            <div className='body'>
                
                <Route path="/">
                    <Accordion/>
                </Route>
                
                <Route path="/articles">
                    <div className='a'>
                        Articulos de mi interes
                        {
                            articles.map((article, index) => {
                                return (
                                    <Article  key={index} img={article.img} title={article.title} desc={article.desc} ></Article>
                                )
                            })
                        }
                    </div>
                </Route>
            </div>
            <Footer />
        </div>
    )

}


ReactDom.render(
    <App/>,
    document.querySelector('#root')
)