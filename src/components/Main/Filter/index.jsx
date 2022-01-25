import React, {useState } from "react";
import { useEffect } from "react/cjs/react.development";
import style from "./style.module.css"

const Filter = ({messages,setSearchInput}) => {
    const [inputValue,setinputValue] = useState('')
    useEffect(()=>{
        const filteredMessages = messages.filter((el)=>el.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
        setSearchInput(filteredMessages)
    },[inputValue])
    return (
            <>
                <div className={style.filterBox}>
                    <input type='text'onInput={e=>setinputValue(e.target.value)} value={inputValue}   className={style.search} placeholder="Search..."/>
                    <button className={style.searchBtn} onClick={()=>setinputValue('')} >   
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.63692 7.6391L11.2812 10.5934L10.0078 11.7332L7.36352 8.77888L4.01632 11.7749L2.80489 10.4214L6.1521 7.42545L3.50781 4.47117L4.78121 3.33139L7.4255 6.28567L10.518 3.51763L11.7294 4.87107L8.63692 7.6391Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </>
    )
}
export default Filter