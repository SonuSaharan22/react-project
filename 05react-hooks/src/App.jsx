import { useState, useEffect ,useCallback ,useRef} from 'react'
import './App.css'

function App() {
  // State to store password length (default: 8 characters)
  const [length, setLength] = useState(8)

  // State to decide whether numbers should be allowed in the password
  const [numberAllowed, setNumberAllowed] = useState(false)

  // State to decide whether special characters should be allowed
  const [charAllowed, setCharAllowed] = useState(false)

  // State to store the generated password
  const [password, setPassword] = useState("")

  /**
   * useCallback hook
   * ----------------
   * - `passwordGenerator` is memoized so it doesn’t get recreated
   *   on every render unless dependencies change.
   * - Dependencies: length, charAllowed, numberAllowed
   * - Generates a random password based on selected criteria.
   */

/**
 * useef hook
 * 
 */

 const passwordRef =useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      // Add numbers if allowed
      if (numberAllowed) str += "0123456789"

      // Add special characters if allowed
      if (charAllowed) str += "!@#$%^&*(){}[]~`"

      // Generate a random password of given length
      for (let i = 1; i <= length; i++) {
        let charIndex = Math.floor(Math.random() * str.length + 1) // pick random index
        pass += str.charAt(charIndex) // append character
      }

      // Update password state
      setPassword(pass)
    },
    [length, charAllowed, numberAllowed, setPassword]
  )

  const copyPasswordOnClipboard = useCallback(() =>{
    passwordRef.current?.select();
  /**  passwordRef.current?.setSelectionRange(0,3); // to select the number of password to be copy like one char two or more  */  
  /** window.navigator.clipboard.writeText(password) */   
  } , [password])
  /**
   * useEffect hook
   * ----------------
   * - Runs `passwordGenerator` whenever dependencies change.
   * - Dependencies: length, numberAllowed, charAllowed, passwordGenerator
   * - Ensures a new password is generated automatically whenever
   *   options are updated.
   */
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
        {/* Title */}
        <h1 className="text-white text-center my-3">Password Generator</h1>

        {/* Input field + Copy button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text" 
            value={password} // shows the generated password
            className="outline-none w-full py-1 px-3"
            placeholder="Password" 
            readOnly // user cannot type manually
            ref={passwordRef}
          />
          <button onClick={copyPasswordOnClipboard}
           className="bg-blue-600 text-white px-4 py-1 hover:bg-blue-700">
            Copy
          </button>
        </div>

        {/* Controls Section */}
        <div className='flex text-sm gap-x-2'>

          {/* Password length slider */}
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={8} 
              max={16} 
              value={length} // controlled input linked to state
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} // update length state
            />
            <label>Length: {length}</label>
          </div>

          {/* Checkbox for Numbers */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox" 
              checked={numberAllowed} // controlled input (state-driven)
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev) // toggle state
              }}           
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          {/* Checkbox for Special Characters */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox" 
              checked={charAllowed} // controlled input (state-driven)
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev) // toggle state
              }}           
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
