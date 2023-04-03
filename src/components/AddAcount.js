import React from 'react'
import Card from './Card'
import { useContext, useState } from 'react'
import { UsersContext } from '../App'

function AddAccount() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [salary, setSalary] = useState("")

  const {users, setUsers} = useContext(UsersContext)


  const addNewUser = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [newUser, ...prevUsers];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUsers = {
      id: Date.now(),
      name: name,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      salary: salary,
    };

    addNewUser(newUsers);
    setName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setSalary("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />

        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last name"
        />

        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="phone number"
        />

        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />

        <label>Salary:</label>
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="salary"
        />

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

  


export default AddAccount

