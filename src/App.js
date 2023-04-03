import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { createContext, useState } from 'react';

export const UsersContext = createContext(null)
const dummyUsers = [
  {
    id: 1, 
    name: "Marko",
    lastName: "Petrovic",
    phoneNumber: "003-444-222",
    email : "markopetrovic@gmail.com",
    salary: "1200$"
  },
  {
    id: 2, 
    name: "Igor",
    lastName: "Jovanovic",
    phoneNumber: "003-444-222",
    email : "igorjovanovic@gmail.com",
    salary: "1000$"
  },
  {
    id: 3, 
    name: "Stefan",
    lastName: "Nesovic",
    phoneNumber: "003-444-222",
    email : "stefanpetrovic@gmail.com",
    salary: "1556$"
  },

]

function App() {

  const[users, setUsers] = useState(dummyUsers)


  
return (
    <div className="App">
     <Navbar />
     <UsersContext.Provider value={{users, setUsers}}> 
     <Outlet />
     </UsersContext.Provider>
     
    </div>
  );
}

export default App;
