import { useState } from "react"

export const Register = () =>{
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [data, setData] = useState(null)
    const regHandler = async () =>{
        let data = await fetch(`https://front-test.hex.team/api/register?username=${name}&password=${pass}`,
                {
                    method : "POST",
                    headers:{
                        "accept": "application/json"
                    }
                }
                )
                setData(data)
        console.log(data)
    }

    return(
        <div>
            <input  onChange={(e)=>setName(e.currentTarget.value)} type="text" placeholder="Имя" value={name}/>
            <input onChange={(e)=>setPass(e.currentTarget.value)} type="password" placeholder="пароль" value={pass}/>
            <button onClick={regHandler}>Зарегистрироваться</button>
            {data?.statusText=== 'OK'?<div>вы зареганы</div>:<div>{`полльзователь с именем ${name} уже существует`}</div>}
        </div>
    )
}