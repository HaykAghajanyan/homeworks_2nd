import React from "react";
import style from "./style.module.css"

import Navigations from "./Navigations"


const Footer = ({navEl}) => {
    return (
            <>
                <footer className={style.footer}>
                   <Navigations navEl = {navEl} />
                </footer>
            </>
    )
}
export default Footer
