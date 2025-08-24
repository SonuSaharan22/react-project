import { useState } from 'react'
import './App.css'
import Card from './components/Card' 


function App() {
  const [count, setCount] = useState(0)
  let myObj = {username:"Sonu", age:21};
  return (
    <>
      <h1 className='bg-green-400'>Tailwind test</h1>
      <Card  username="sonu" />
      <Card  username="saharan"/>
    </>
  )
}
 
export default App
