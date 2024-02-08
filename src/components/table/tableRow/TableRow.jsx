import { TableCell } from "../tableCell/TableCell"
import style from "./TableRow.module.css"
export const TableRow = ({shortLink, originalLink, counts }) =>{

    return(
        <div className={style.wrapper}>
           
            <TableCell data={`https://front-test.hex.team/s/${shortLink}`}/>
            
            
            <TableCell visibility="hidden" data={originalLink}/>
            <TableCell visibility="hidden" data={counts}/>
        </div>
    )
}