
import react from 'react'
import Login from './Login.jsx';
import Register from './Register.jsx';

import './App.css'
import { Route,Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
    <div id='ys' className='text-white h-[100vh] flex justify-center items-center bg-cover' >
     <Routes>
      <Route path='Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
     </Routes>
     
    
    </div>
      
        
    </>
  )
}

export default App
