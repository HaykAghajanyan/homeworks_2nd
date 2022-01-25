import React , { useEffect,useState} from "react";
import {Routes, Route } from "react-router-dom";

import FirstPage from "./FirstPage"
import Messages from "./Messages";
import Settings from "./Settings";
import Filter from './Filter'


import style from "./style.module.css"

const Main = ()=>{
    const [searchInput,setSearchInput] = useState('')
    const [messagItems,setMessagItems] = useState([]);
    useEffect(()=>{
        getMessages()
        
   },[])
   const getMessages = ()=>{
     fetch("/db.json")
    .then(r=>r.json())
    .then(r=>{
        setMessagItems(r[0]['messages'])
     })
    .catch(err=>console.log('err',err))
   }
   

    return(
        
        <>
            <main className={style.main}>
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/messages" element={<><Filter messages = { messagItems}  setSearchInput={setSearchInput} />  <Messages  messages = {searchInput.length>1 ? searchInput : messagItems }/> </>} /> 
                    <Route path="/settings" element={<Settings  messages = {messagItems }  setMessages = {setMessagItems}/>} />
                </Routes>
            </main>
        </>
    )
}

export default Main