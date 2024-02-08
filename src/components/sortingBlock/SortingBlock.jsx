import { useDispatch } from "react-redux"
import { setOrder } from "../../reducers/slice"
import style from "./SortingBlock.module.css"
import { useState } from "react"

export const SortingBlock = () =>{
    const dispatch = useDispatch()
    const setOrderHandler = (value) =>{
        dispatch(setOrder(value))
        
    }
    const [selectedSelect, setSelectedSelect] = useState(null);

    const changeColor = (e) => {
      setSelectedSelect(e.target.id);
    };
  
    const customStyle = {
      backgroundColor: 'initial',
    };
  
    const activeStyle = {
      backgroundColor: 'lightgreen',
    };
    return(
        <div className={style.wrapper}>

            <div>
                <span>По просмотрам</span>
                <select id="select1"
                 onChange={(e)=>{setOrderHandler(e.currentTarget.value)
                    
                 }}
                 onClick={(e)=>changeColor(e)}
                 style={selectedSelect === 'select1' ? activeStyle : customStyle} >
                    <option  value="asc_counter">asc_counter</option>
                    <option value="desc_counter">desc_counter</option>
                </select>
            </div>
            <div>
            <span>По коротким ссылкам</span>
                <select id="select2"  onChange={(e)=>{setOrderHandler(e.currentTarget.value)
                    
                 }}
                 onClick={(e)=>changeColor(e)}
                 style={selectedSelect === 'select2' ? activeStyle : customStyle}  >
                    <option value="asc_short">asc_short</option>
                    <option value="desc_short">desc_short</option>
                </select>
            </div>
            <div>
            <span>По оригинальным ссылкам</span>
                <select id="select3" onChange={(e)=>{setOrderHandler(e.currentTarget.value)
                   
                 }}
                 onClick={(e)=>changeColor(e)}
                 style={selectedSelect === 'select3' ? activeStyle : customStyle} >
                    <option value="asc_target">asc_target</option>
                    <option value="desc_target">desc_target</option>
                </select>
            </div>
        </div>
    )
}