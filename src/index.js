import React, { useState } from "react";
import ReactDom from "react-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import Article from './components/Article'
import articles from "./articles";
import styles from './index.css';
import Route from './components/Route'
import Curriculum from './components/Curriculum'

const App = () => {


    return (
        <div>
            <NavBar/>
            <div className='body'>
                
                <Route path="/">
                    <Curriculum/>
                    <Accordion/>
                </Route>

                <Route path="/curriculum">
                    <div></div>
                </Route>

                <Route path="/articles">
                    <div className='title'>Artículos de mi interes</div>
                    <div className='a'>
                        {
                            articles.map((article, index) => {
                                return (
                                    <Article  key={index} href={article.href} img={article.img} title={article.title} desc={article.desc} ></Article>
                                )
                            })
                        }
                    </div>
                </Route>

                <Route path="/projects">
                    <div></div>
                </Route>

                <Route path="/technologies">
                    <div></div>
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