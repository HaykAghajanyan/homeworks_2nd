import React from "react";
import style from "./style.module.css"

import Navigations from "./Navigations"


const Footer = ({navEl, chosenActive , setChosenActive}) => {
    return (
            <>
                <footer className={style.footer}>
                   <Navigations navEl = {navEl} chosenActive = {chosenActive} setChosenActive ={setChosenActive}/>
                </footer>
            </>
    )
}
export default Footer
