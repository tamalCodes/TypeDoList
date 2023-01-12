import React, { useState } from 'react'
import Footer from './components/Footer/Footer'
import InputField from './components/InputField/InputField'
import "./styles/App.css"

const App: React.FC = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);


  return (
    <>
      <div className='bg-gray-900 h-[100vh] w-[100vw]'>
        <div className='text-center pt-10'>
          <h1 className=' text-[48px] font-raleway text-white font-bold md:tracking-[0.2rem]'>
            Just a ToDo
          </h1>

          <InputField todo={todo} setTodo={setTodo} />

        </div>
        <Footer />

      </div>
    </>
  )
}

export default App