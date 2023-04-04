import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { deleteUsers } from '../store/userSlice'


function EditDeleteAccount() {

 const { users } = useSelector((state) => state.userStore);

 const dispatch = useDispatch()

 useEffect(()=> {
  console.log(users)
},[users])



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

            <button className="btn btn-danger" onClick={() => {
                        dispatch(deleteUsers(user.id))
                    }}>Delete
                    </button>

            </td>
          </tr>
        ))}
           </tbody>
      </table>
    </Card>
  )
}

export default EditDeleteAccount
