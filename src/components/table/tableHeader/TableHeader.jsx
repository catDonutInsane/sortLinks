import { TableCell } from "../tableCell/TableCell"
import style from "../tableRow/TableRow.module.css"
export const TableHeader = () =>{

    return(
        <div className={style.wrapper}>
            <TableCell visibility="hidden" data={"короткая ссылка"}/>
            <TableCell visibility="hidden" data={"Исходная ссылка"}/>
            <TableCell visibility="hidden" data={"Количесво переходов"}/>
        </div>
    )
}