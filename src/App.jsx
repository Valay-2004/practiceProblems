import { useState } from 'react'
import LoginForm from './LoginForm'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginForm/>
    <footer className='flex bg-white border-2 shadow-white'>Valay</footer>
    </>
  )
}

export default App
