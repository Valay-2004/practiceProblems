import { useState } from 'react'
import LoginForm from './LoginForm'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginForm/>
    <footer className='flex items-center justify-center w-full m-0'>Valay</footer>
    </>
  )
}

export default App
