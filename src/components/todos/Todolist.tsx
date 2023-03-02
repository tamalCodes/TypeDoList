import React, { useState } from 'react'
import { Todo } from '../../models/todoModel'


import SingleTodo from '../singletodo/SingleTodo'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist = ({ todos, setTodos }: Props) => {






    return (
        <>

            {/*  <button className='btn bg-white text-black' onClick={() => {
                console.log(todos)
            }}>SHOW</button> */}

            {
                todos.length > 0 && <div className='flex flex-wrap justify-center mt-20 gap-5 font-raleway text-[24px] p-2  '>
                    {
                        todos.map((el, index) => {
                            return (
                                <SingleTodo el={el} index={index} todos={todos} setTodos={setTodos} />
                            )
                        })
                    }
                </div>
            }

        </>
    )
}

export default Todolist