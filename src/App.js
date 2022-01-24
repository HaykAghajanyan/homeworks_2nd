import {Component, useCallback, useEffect, useMemo, useState} from "react";
import { Routes} from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const App = () =>{

    return (
        <div className="container">
            <Header/>
            <Main/>
            <Footer />
        </div>
    )
}

export default App;
