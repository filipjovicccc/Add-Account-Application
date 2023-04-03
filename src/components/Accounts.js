import React from 'react'
import { useContext } from 'react'
import { UsersContext } from '../App'
import Card from './Card'


function Accounts() {
   const {users} = useContext(UsersContext)
  
  return (

    <Card title="Accounts">
    
      <table  className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Website</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.website}</td>
            <td>{user.salary}</td>
          </tr>
        ))}
           </tbody>
      </table>

  </Card>
  )
}

export default Accounts
