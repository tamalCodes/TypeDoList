import React, { useState } from 'react'
import Footer from './components/Footer/Footer'
import InputField from './components/InputField/InputField'
import { Todo } from './models/todoModel'
import "./styles/App.css"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        closeButton={false}
        limit={1}
      />
      <div className=''>
        <div className='text-center pt-10'>
          <h1 className=' text-[48px] font-raleway text-white font-bold md:tracking-[0.2rem]'>
            Just a ToDo
          </h1>

          <InputField task={task} setTask={setTask} todos={todos} setTodos={setTodos} />

        </div>


      </div>
      <Footer />
    </>
  )
}

export default App