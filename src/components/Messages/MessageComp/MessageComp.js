import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { useMessagesData } from "../../../App.js";
import style from './MessageComp.module.css'

const MessageComp = ({ item, user }) => {
  const { setMessages } = useMessagesData()
  const [edit, setEdit] = React.useState(false)

  const message = React.useRef(item?.text)

  const handleEdit = () => {
    setEdit(!edit)
  }

  const cancel = () => {
    setEdit(!edit)
  }

  const save = () => {
    console.log('chem karoxanum anem es antere');
  }

  const handleDelete = () => {
    async function deleteMsg() {
      await axios.delete(`https://61b8b44138f69a0017ce5cd7.mockapi.io/Memory_game/${item.id}`)
      const newData = await axios.get('https://61b8b44138f69a0017ce5cd7.mockapi.io/Memory_game')
      setMessages(newData.data)
    }
    deleteMsg()
  }

  return (
    <>
      {
        user !== item?.name ?
          <div className={style.messageItem}>
            <p className={style.content} style={{ color: item?.nameColor }}>{item?.name}</p>
            <p className={style.content}>{item?.date}</p>
            <p className={style.content} style={{ color: item?.textColor }}>{item?.text}</p>
          </div> :
          <div className={style.myMessageItem}>
            <div className={`${style.overlay} ${edit ? style.overlayVisible : ''}`}>
                
                <TextField
                className={style.input}
                  id="outlined-multiline-static"
                  label="Edit"
                  multiline
                  rows={4}
                  defaultValue={item?.text}
                />
                <Button className={style.sc} variant="outlined" onClick={save} >Save</Button>
                <Button className={style.sc} variant="outlined" onClick={cancel} >Cancel</Button>
            </div>
            <NavLink className={style.msg} to={`${item?.id}`} >
              <p className={style.content} style={{ color: item?.nameColor }}>{item?.name}</p>
              <p className={style.content}>{item?.date}</p>
              <p className={style.content} style={{ color: item?.textColor }}>{item?.text}</p>
            </NavLink>
            <div className={style.buttons}>
              <div onClick={handleDelete} >
                <div className={style.editButtons}>
                  <a>Delete</a>
                  <img width={20} height={20} src="/img/delete.png" alt="delete" />
                </div>
              </div>
              <div onClick={handleEdit} >
                <div className={style.editButtons} >
                  <a>Edit</a>
                  <img width={20} height={20} src="/img/edit.png" alt="edit" />
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default MessageComp
