import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css"

const Navigations = ({navEl, chosenActive , setChosenActive}) => {
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