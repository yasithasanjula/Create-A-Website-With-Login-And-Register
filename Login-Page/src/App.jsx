
import react from 'react'
import Login from './Login.jsx';

import './App.css'
import { Route,Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
    <div id='ys' className='text-white h-[100vh] flex justify-center items-center bg-cover' >
     <Routes>
      <Route path='Login' element={<Login/>}/>
     </Routes>
      <Login />
    
    </div>
      
        
    </>
  )
}

export default App
