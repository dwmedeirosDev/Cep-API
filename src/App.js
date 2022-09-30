import React, {useState} from 'react'
import Formulario from './Components/Formulario';

export default function App() {

  const [status, setStatus] = useState(false)

  function showForm(){
    setStatus(!status) 
  }

  return (
    <>
    <button onClick={()=>{showForm()}}>{status ? 'Close' : 'Open'}</button>
    {status && <Formulario />}
    </>
  )
}