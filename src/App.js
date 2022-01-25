import {Component, useCallback, useEffect, useMemo, useState} from "react";
import { Routes} from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
const urls = [
    {
        id:1,
        name:'home',
        url:'/',
        icoUrl:'"https://img.icons8.com/glyph-neue/64/000000/home.png"',
    },
    {
        id:2,
        name:'messages',
        url:'/messages',
        icoUrl:'"https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-Message-social-media-bearicons-glyph-bearicons.png"',
    },
    {
        id:3,
        name:'settings',
        url:'/settings',
        icoUrl:'"https://img.icons8.com/ios-filled/50/000000/settings.png"',
    },
]

const App = () =>{
    const [activeUrl, setActiveUrl] = useState('1')
    const [userName, setUserName] = useState('guest')
    
    useEffect(()=>{
        const namePrompt = prompt('Enter Nick Name')

        if('namePrompt')setUserName(namePrompt)
        
        }
    ,[])
    
    useEffect(()=>{
        urls.forEach(({id,url})=>{
            if(url === window.location.pathname) setActiveUrl(id.toString())
        })
        }
    ,[])
    
    return (
        <div className="container">
            <Header chosenActive = {activeUrl} userName = {userName}/>
            <Main />
            <Footer  navEl = {urls} chosenActive = {activeUrl} setChosenActive = {setActiveUrl}/>
        </div>
    )
}

export default App;
