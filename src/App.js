import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { restoreUsers } from './store/userSlice';

export const UsersContext = createContext(null)

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(restoreUsers())
  }, [])
return (
    <div className="App">
     <Navbar />
   
     <Outlet />
     
     
    </div>
  );
}

export default App;
