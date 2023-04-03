import React, { useState} from 'react'
import Card from './Card'
import { useContext } from 'react'
import { UsersContext } from '../App'
import { useParams } from 'react-router-dom'

function EditAccount() {
    
    const {users, setUsers} = useContext(UsersContext)

     
    const [name, setName] = useState(users.map(user => user.name))
    const [lastName, setLastName] = useState(users.map(user => user.lastName))
    const [phoneNumber, setPhoneNumber] = useState(users.map(user => user.phoneNumber))
    const [email, setEmail] = useState(users.map(user => user.email))

    const {id} = useParams()
   
    const userToEdit = users.find(user => user.id === parseInt(id))


  return (
    <Card title="Eddit Account">

     <form key={userToEdit.id} className='form'>
          <label>Name:</label>
          <input value={userToEdit.name} onChange={() => setName()} name="name" placeholder='name'/>
          <label>Last Name:</label>
          <input value={userToEdit.lastName} name="last name" placeholder='last name' />
          <label>Phone Number: </label>
          <input value={userToEdit.phoneNumber} name="phone number" placeholder="phone number"/>
          <label>Email: </label>
          <input value={userToEdit.email} name="email" placeholder="email"/>
          <label>Salary: </label>
          <input value={userToEdit.salary} name="salary" placeholder="salary"/>
     </form>


   
  </Card>
  )
}

export default EditAccount
