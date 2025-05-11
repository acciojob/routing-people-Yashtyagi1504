import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"

const UserList  = ()=>{

    const [names,setNames] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setNames(data))
    },[])

    return(
        <ul>
            <h1>User List</h1>
            {
                names.map(name=>{
                   return <li key={name.id}>
                            <a href = {`/users/${name.id}`}> {name.name}</a>
                        </li>
                })
            }
        </ul>
    )
}

export default UserList