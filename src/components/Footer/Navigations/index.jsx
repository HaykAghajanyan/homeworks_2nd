import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css"


const navEl = [
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


const Navigations = () => {
    const [chosenActive, setChosenActive] = useState('1')
    console.log(window.location.pathname)
    useEffect(()=>{
        navEl.forEach(({id,url})=>{
            if(url === window.location.pathname) setChosenActive(id.toString())
        })
    }
    
    ,[])
    const chooseActive = e =>{
        if(e.target.id !== chosenActive) {
            setChosenActive(e.target.id)
        }
    }   

    return (
        
            <>
                <nav className={style.nav}>
                
                    {
                    
                    navEl.map(el =>
                    <Link to={el.url} key={el.id}>
                      <div 
                      id={el.id}
                      className={`${style['nav-item']} ${el.id.toString()  === chosenActive? style.active : null}`} 
                      style={{'backgroundImage':`url(${el.icoUrl})`}}
                      onClick={chooseActive} 
                      > </div> 
                    </Link> 
                    )
                    }
                
                </nav>
            </>
    )
}
export default Navigations