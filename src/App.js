import {Component, useCallback, useEffect, useMemo, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { urls } from "./helpers/constants";
import {changeMessagesData,changeChatsData} from "./redux/ducks/messagesDuck"
import AuthDuck, {changeAuthUser} from "./redux/ducks/authDuck"


async function loginUser(token) {
    return fetch(`http://localhost:8080/users?token=${token}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    })
    .then(data => data.json())
    .then(data => data[0])
    .catch(rej => console.log(rej))
}
const App = () =>{
    const token = sessionStorage.getItem('token')
    const {auth} = useSelector((state)=> state.AuthDuck)
    const dispatch = useDispatch()
    const [authUserName, setAuthUserName] = useState('guest')
    const reduxSetMessages = (data)=>{
    //     fetch("http://localhost:8080/messages")
    //    .then(res=>res.json())
    //    .then(res=>{
    //     dispatch(changeMessagesData(res))
    //     })
    //    .catch(err=>console.log('err',err))
        
      }
    async function getMessage(id,elem){
        const result = await fetch(`http://localhost:8080/messages/${id}`)
       .then(res=>res.json())
       .then(res=>elem.message = res)
       .catch(err=>console.log('err',err))
       return result
      }
    const  getChats = (auth)=>{
        
        fetch("http://localhost:8080/chats")
       .then(res=>res.json())
       .then(res=>{
        dispatch(changeChatsData(res))
        return res.filter((item,index)=>{
                const cheackUsers = item.chatGroup.find(el=>{
                    if(el.userId === auth.id){
                        return el
                    }
                }) 
                return cheackUsers
                // if(cheackUsers){
                //     item.info.map(elem => {
                //         getMessage(elem.messageId,elem)
                //         // .then(res => elem.message = res)
                //           return elem
                //     })
                //     return item
                // }
            })
        })
        // .then(res => {
        //      // dispatch(changeChatsData(res))
        //     const promArr = res.map((el)=>{
        //        return  el.info.map((elem)=>{
        //            return  getMessage(elem.messageId)
        //             .then(res => elem.message = res)
        //         })
        //     })
        //     const promArr2 = promArr.reduce((acc,mess)=>{
        //         return acc.concat(mess)
        //     },[])
        //     console.log(promArr2)
        //     Promise.allSettled(promArr2).then((res)=>res.forEach((item)=>item))
        // })
        .then(res=>dispatch(changeMessagesData(res)))
        .catch(err=>console.log('err',err))
      }
    useEffect(()=>{
        // const namePrompt = prompt('Enter Nick Name')
            if(auth && token){
                getChats(auth)
                userSetName(auth)
            }else{
                cheackUserInfo()
            }
        }
    ,[auth])
    
    const userSetName = ({userName}) =>{
        setAuthUserName(userName)
    }

    const cheackUserInfo = async e => {
        const data = await loginUser(token);
        if(data){
            dispatch(changeAuthUser(data)) 
        }
    }
    return (
        <div className="container">
            {token ? <Header  userName = {authUserName}/>: <div></div>}
            <Main/>
            {token ? <Footer  navEl = {urls} /> : <div></div>}
        </div>
    )
}

export default App;
