import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Input } from './components/Input';
import { Octopus } from './assets/functions/model1';
function App() {
  const [counts, setCount] = useState(0);
  return (
    <div className='flex flex-row items-center justify-center w-[100vw] h-[100vh]'>
      <form className='flex flex-col'>
        {counts}
       <Input itype={"text"} iplaceholder={"Enter your name"}></Input>
       <Input itype={"email"} iplaceholder={"Enter your email"}></Input>
        <button className='block bg-gray-700 text-white' onClick={(e) => {e.preventDefault(); setCount(Octopus.Model.increaseCount(counts)); console.log(Octopus.Model.increaseCount(counts))}}>Increase count</button>
      </form>
      
    </div>
  )
}

export default App
