import { useState ,useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import { setIsLoged,addUserName,setAccesssToken } from "../../reducers/slice"
import { useDispatch,useSelector } from "react-redux"
import style from "./login.module.css"
export const Login = () =>{
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [WarningMsg, setWarningMsg] = useState(false)
    const dispatch = useDispatch()
    let isLoged = useSelector(state => state.reducer.login)
    const navigate = useNavigate();

    //Если залогинены, то редиректим на главную
   useEffect(()=>{
    if(isLoged){
        navigate('/') 
    }
    
   },[isLoged])

    const logInHandler = async () =>{
         await fetch(`https://front-test.hex.team/api/login`,
                {
                    method : "POST",
                    headers:{
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "username": `${name}`,
                        "password": `${pass}`
                    })
                }
                )
                .then(r=>{
                    if(r.ok){
                        dispatch(setIsLoged(true))
                        dispatch(addUserName(name))
                    }
                    else{
                        setWarningMsg(true)
                    }
                    return r.json()
                    
                })
                .then(r=>dispatch(setAccesssToken(r.access_token)))
    }
   
    return(
        <div className={style.loginWrapper}>
            {WarningMsg?"Неверный логин или пароль":""}
            <input className={style.loginInput}  onChange={(e)=>setName(e.currentTarget.value)} type="text" placeholder="Имя" value={name}/>
            <input className={style.loginInput} onChange={(e)=>setPass(e.currentTarget.value)} type="password" placeholder="пароль" value={pass}/>
            <button onClick={logInHandler}>Войти</button>
        </div>
    )
}