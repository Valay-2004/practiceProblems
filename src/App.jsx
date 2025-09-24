import { useState } from 'react'
import LoginForm from './LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='flex'>Valay</h1>
    <LoginForm />
    </>
  )
}

export default App
