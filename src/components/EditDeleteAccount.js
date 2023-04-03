import React from 'react'
import Card from './Card'
import { UsersContext } from '../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function EditDeleteAccount() {

 const {users} = useContext(UsersContext)

  return (
    <Card title="Edit and Delete Accounts">
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
            <td>
            <Link className="btn btn-warning me-2" to={"/EditAccount/" + user.id}>Edit</Link>

            </td>
          </tr>
        ))}
           </tbody>
      </table>
    </Card>
  )
}

export default EditDeleteAccount
