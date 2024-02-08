import style from "./TableCell.module.css"

export const TableCell = ({data,visibility}) =>{
    function copyText() {
        navigator.clipboard.writeText(data); // Копируем текст в буфер обмена
      }
    return(
        <div  className={style.cell} >
            <button onClick={copyText} className={style.copylink} style={{visibility:`${visibility}`}}>Copy</button>
            <input className={style.inp}  type="text" value={`${data}`} readOnly="readonly"/>
            
           
        </div>
    )
}