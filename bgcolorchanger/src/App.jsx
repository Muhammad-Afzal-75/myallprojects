import { useState } from 'react'
import Signup from './components/Signup'


function App() {
  const [color, setColor] = useState('olive')


  return (
    <>

    <Signup/>
       <div className='w-full h-screen duration-200 flex flex-col justify-end' style={{ backgroundColor: color }}>
        <div className=' p-4 flex justify-center gap-4  bg-amber-50 w-120 ms-130 rounded-2xl shadow-2xl'>
          <button className='p-3 rounded border text-white shadow-md bg-yellow-300' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='p-3 rounded border text-white shadow-md bg-blue-600' onClick={() => setColor("blue")}>Blue</button>
          <button className='p-3 rounded border text-white shadow-md bg-pink-300' onClick={() => setColor("pink")}>Olive</button>
          <button className='p-3 rounded border text-white shadow-md bg-black' onClick={() => setColor("black")}>Black</button>
          <button className='p-3 rounded border text-white shadow-md bg-green-500' onClick={() => setColor("green")}>Green</button>
          <button className='p-3 rounded border text-white shadow-md bg-red-500' onClick={() => setColor("red")}>red</button>

        </div>
      </div> 
     
    </>
  )
}

export default App
