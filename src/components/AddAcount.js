import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../store/userSlice'



function AddAccount() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [salary, setSalary] = useState("")



  const dispatch = useDispatch()

  const addNewUser = (newUser) => {
    dispatch(addUsers(newUser));
};
  const isValidName = (name) => /^[a-zA-Z]+$/.test(name);
  const isValidLastName = (lastName) =>  /^[a-zA-Z]+$/.test(lastName);
  const isValidPhoneNumber = (phoneNumber) => /^\d+$/.test(phoneNumber);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidSalary = (salary) => /^\d+$/.test(salary);

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidName(name)) {
      alert("Please enter a valid name (letters only)");
      return;
    }
    if (!isValidLastName(lastName)) {
      alert("Please enter a valid last name (letters only)");
      return;
    }
    
    if (!isValidPhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number (numbers only)");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    
    if (!isValidSalary(salary)) {
      alert("Please enter a valid salary (numbers only)");
      return;
    }
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

