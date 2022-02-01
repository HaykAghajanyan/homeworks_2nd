import React , { useCallback, useEffect,useState} from "react";
import {Routes, Route ,Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import FirstPage from "./FirstPage"
import Messages from "./Messages";
import PopupWrapper from "./PopupWrapper";
import PopupMessage from "./PopupMessage";
import Settings from "./Settings";
import Filter from './Filter'
import Login from "../Auth/Login"
import Registration from "../Auth/Registration"
import MessagesDuck from "../../redux/ducks/messagesDuck"



import style from "./style.module.css"

const Main = ()=>{
    const token = sessionStorage.getItem('token')
    const [searchInput,setSearchInput] = useState('')
    const {messages} = useSelector((state)=> state.MessagesDuck)
    const navigate = useNavigate() 
    const onClose = useCallback(() => {
        navigate('../')
    },[])
    return(
        <>
        <main className={style.main}>
            {!token ?
            <Routes>
                <Route path="/login" element={<Login  />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<Navigate to="/login"/>} />
            </Routes> 
            : 
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/messages" element={<><Filter  setSearchInput={setSearchInput} />  <Messages  messages = {Array.isArray(searchInput) ? searchInput : messages }/> </>} /> 
                <Route path="/messages/:id" element={
                <PopupWrapper  goBack = {onClose} > 
                    <PopupMessage/>
                </PopupWrapper>
                } />
                <Route path="/settings" element={<Settings  messages = {messages } />} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>}
            
        </main>
        </>
    )
}

export default Main