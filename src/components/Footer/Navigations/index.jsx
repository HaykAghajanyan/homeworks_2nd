import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {  NavLink } from "react-router-dom";
import { changeRoute } from "../../../redux/ducks/appDuck";
import style from "./style.module.css"
import styleC from "./style.css"



const Navigations = ({navEl}) => {
    const dispatch = useDispatch()

    const handleRouteChange = useCallback((route)=>{
        dispatch(changeRoute(route))
    })

    return (
            <>
                <nav className={style.nav}>
                    {
                        navEl.map(el =>
                        <NavLink to={el.url} key={el.id} onClick={()=>handleRouteChange(el.url)}>
                        <div 
                        id={el.id}
                        className={`${style['nav-item']}`} 
                        style={{'backgroundImage':`url(${el.icoUrl})`}}
                        > </div> 
                        </NavLink> 
                        )
                    }
                
                </nav>
            </>
    )
}
export default Navigations