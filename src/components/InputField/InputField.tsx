import React, { useEffect, useState } from 'react'
import { Todo } from '../../models/todoModel'
import { showSuccessToast } from '../../utils/toastMessage'
import Todolist from '../todos/Todolist'
import "./InputField.css"


interface Props {
    task: string,
    setTask: React.Dispatch<React.SetStateAction<string>>
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const InputField = ({ task, setTask, todos, setTodos }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
        console.log(e.target.value)
    }

    const handleAddTask = () => {
        setTodos([...todos, { id: todos.length + 1, title: task, completed: false }])
        setTask('')
        showSuccessToast("Successfully added to list")
    }


    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && document.activeElement?.id === 'taskinput') {
                e.preventDefault();
                setTask('')
                setTodos([...todos, { id: todos.length + 1, title: task, completed: false }])
                showSuccessToast("Successfully added to list")
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [task, todos]);


    return (


        <>
            <input type="text" placeholder='Input your task !' className='font-raleway w-[60vw] h-[2.5rem] rounded-[3px] mt-[2.7rem] bg-gray-200 text-[24px] pl-[2rem] ' value={task} onChange={handleChange} id="taskinput" />
            <br />

            <button className='submitbutton bg-yellow-500 font-raleway text-[24px] p-[10px] rounded-[5px] mt-10 cursor-pointer ' onClick={handleAddTask}>Add to list</button>

            <br />

            <Todolist todos={todos} setTodos={setTodos} />

        </>
    )
}

export default InputField