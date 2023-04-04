import React from 'react'
import Card from './Card'
import {useSelector} from "react-redux"
import { useEffect } from 'react'


function Accounts() {

  // const state = useSelector((add) => add.userStore.users)
  // useEffect(() => {
  //   console.log(state)
  // }, [])


  //useSelect dolazi u ridux
  //  const {users} = useContext(UsersContext)

 const {users} = useSelector((state) => state.userStore)

  

  //  const state = useSelec
  
  return (

    <Card title="Accounts">
    
      <table  className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Salary$</th>
          </tr>
        </thead>
        <tbody>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.email}</td>
            <td>{user.salary}</td>
          </tr>
        ))}
           </tbody>
      </table>

  </Card>
  )
}

export default Accounts
