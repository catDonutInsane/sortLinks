import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setUrlsPag } from "../../reducers/slice"
import { TableWrapper } from "../table/tableWrapper/TableWrapper"
import { SortingBlock } from "../sortingBlock/SortingBlock"


export const Squeeze = () =>{
    const dispatch = useDispatch()
    const {order, accessToken, urls} = useSelector(state=> state.reducer)
    const [offset, setOffset] = useState(0)
    const [link, setLink] = useState('')

    //получаем статистику
    const fetchData = () =>{
        fetch(`https://front-test.hex.team/api/statistics?order=${order}&limit=10&offset=${offset}`,
            {
                method: "GET",
                headers: {
                    "accept": "application/json", 
                    "Authorization": `Bearer ${accessToken}`,
                } 
            }  
        )
        .then(res=>res.json())
        .then(r=>dispatch(setUrlsPag(r)))
    }
    useEffect(()=>{
        fetchData()
        
        
    },[accessToken,offset,order])

    //получаем ссылку и добавляем в таблицу
     const squeezeHandler = async () =>{
        await fetch(`https://front-test.hex.team/api/squeeze?link=${link}`,

        {
            method : "POST",
            headers:{
                        "accept": "application/json",
                        "Authorization": `Bearer ${accessToken}`
                    },
        }
        )
        .then(r=>fetchData())
     }
     let nextPage = () =>{
        if(offset>=urls.length){
            return
        }else{
            setOffset(offset + 10)

        }
     }
     let prevPage = () =>{
        if(offset>0){
            setOffset(offset - 10)
            
        }else{
            setOffset(0)
            return
        }
     }
    return (
        <div>
            <input onChange={(e)=>setLink(e.currentTarget.value)} type="text" placeholder="введите адресс" value={link}/>
            <button onClick={squeezeHandler}>Преобразовать</button>
            <SortingBlock/>
            
            <TableWrapper urls={urls}/>
            
            <div>
                <button onClick={()=>prevPage()}>Предыдущие 10</button>
                 <button onClick={()=>nextPage()}>Следующие 10</button>
            </div>
            
        </div> 
    )
}
