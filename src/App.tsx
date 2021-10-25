import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myprojects/MyProjects";
import {Remote} from "./remote/Remote";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import "./common/styles/Global.scss"


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Remote/>
            <Contacts/>
            <Footer />
        </div>
    );
}

export default App;
