import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UserDetails = ()=>{
    const [user,setUser] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json()).then(data=>setUser(data))
    },[id])
    return(
        <div>
            {
                Object.keys(user).length !== 0 ? <div>
            <p>Name: {user.name}</p>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div> : <p>Loading...</p>
            }
        </div>
        
    )
}

export default UserDetails