import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(15)


  const addValue = () => {setCount(prevcounter=> prevcounter+1)
  }
                        
  const removeValue = () => {setCount(count - 1)}
  return (
    <>
    <h1>chai or react</h1>
    <h2>Counter:{count}</h2>
    <button onClick={addValue }  >add value :</button>
    <br />
    <button onClick={removeValue} >remove : </button>
    </>
  )
}

export default App
