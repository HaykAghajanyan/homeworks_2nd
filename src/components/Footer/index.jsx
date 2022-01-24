import React from "react";
import style from "./style.module.css"

import Navigations from "./Navigations"


const Footer = () => {
    return (
            <>
                <footer className={style.footer}>
                   <Navigations />
                </footer>
            </>
    )
}
export default Footer
