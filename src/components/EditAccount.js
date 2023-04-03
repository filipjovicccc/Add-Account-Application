import React, { useState} from 'react'
import Card from './Card'
import { useContext } from 'react'
import { UsersContext } from '../App'
import { useParams } from 'react-router-dom'

function EditAccount() {
    
    const {users, setUsers} = useContext(UsersContext)
    
    const {id} = useParams()
    const userToEdit = users.find(user => user.id === parseInt(id))

    
    const [name, setName] = useState(userToEdit.name)
    const [lastName, setLastName] = useState(userToEdit.lastName)
    const [phoneNumber, setPhoneNumber] = useState(userToEdit.phoneNumber)
    const [email, setEmail] = useState(userToEdit.email)
    const [salary, setSalary] = useState(userToEdit.salary)

  //   const setStorage = () => {
  //     localStorage.setItem('users', JSON.stringify(users))
  //  }

    
    const updateUsers = (e) => {
      e.preventDefault();
      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.map((user) => {
          if (user.id === userToEdit.id) {
            return { ...user, name, lastName, phoneNumber, email, salary };
          }
          return user;
        });
        localStorage.setItem('users', JSON.stringify(updatedUsers)); // update local storage
        return updatedUsers;
      });
    };



  return (
    <Card title="Eddit Account">

     <form onSubmit={updateUsers} key={userToEdit.id} className='form'>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder='name'/>
          <label>Last Name:</label>
          <input value={lastName}  onChange={(e) => setLastName(e.target.value)}  name="last name" placeholder='last name' />
          <label>Phone Number: </label>
          <input value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)}  name="phone number" placeholder="phone number"/>
          <label>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}  name="email" placeholder="email"/>
          <label>Salary: </label>
          <input value={salary}  onChange={(e) => setSalary(e.target.value)} name="salary" placeholder="salary"/>

          <button type="submit">Eddit user</button>
     </form>


   
  </Card>
  )
}

export default EditAccount
