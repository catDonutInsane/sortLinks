import { useSelector } from "react-redux"
import { HeaderButtons } from "./headerBtns/HeaderButtons"
import style from "./Header.module.css"
export const Header =()=>{
  let username = useSelector(state => state.reducer.userName)
    return(
        <div className={style.wrapper}>
            {username?<div>{`Вы вошли как ${username}`}</div>:<HeaderButtons/>}
        </div>
    )
}