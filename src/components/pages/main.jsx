import {  useSelector } from "react-redux"
import { Squeeze } from "../urlsqueeze/squeezePage"
export const Main = () =>{
    let isLoged = useSelector(state => state.reducer.login)
  
    return(
        <div>
            {isLoged
                ?<div><Squeeze/></div>
                :<div>Вы не вошли в систему, зарегистрируйтесь или войдите под своей учётной записью  </div>
            }

        </div>
    )
}