import style from "./PopupWrapper.module.css"

const PopupWrapper = ({ children, onClose }) => {
  return (
    <div className={style.messageSelectedItem}>
        <button className={style.goBack} onClick={onClose}>go back</button>
        {children}
      </div>
  )
}

export default PopupWrapper