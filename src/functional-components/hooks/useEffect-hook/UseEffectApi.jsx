import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {
    const[user,setUser]=useState([])

const fetchUser=async()=>{
    try {
        const response=await fetch("data.json")
const data= await response.json();
setUser(data)
    } catch (error) {
        console.log(error);
        
    }
}

useEffect(()=>{
fetchUser()
},[])

  return (
    <div>
      <ul>
        {user.map(user=>(
            <li>
                <li>id:{user.id}</li>
                <li>name:{user.name}</li>
                <li>email:{user.email}</li>
                <li>image:{user.image}</li>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffectApi