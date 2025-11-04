import React, { useContext } from 'react'
import { UserApiContext } from './UserApiContext'

const UserList = () => {

    const{users, loading}= useContext(UserApiContext)

    if(loading) return <p>loading usersss....</p>


  return (
    <div>
      <h2>users</h2>
      <ul>
        {users.map((ur) => (
            <li key={ur.id}>{ur.name} - {ur.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
