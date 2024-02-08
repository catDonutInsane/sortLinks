import { TableRow } from "../tableRow/TableRow"
import { TableHeader } from "../tableHeader/TableHeader"
import style from "./TableWrapper.module.css"

export const TableWrapper = ({urls}) =>{
    return(
        <div className={style.wrapper}>
            <TableHeader/>
            {Array.isArray(urls)
                ?urls?.map(i=><TableRow key={i.id} shortLink={i.short} originalLink={i.target} counts={i.counter}/>)
                :""
            }
            
            
        </div>
    )
}