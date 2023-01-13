import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsCheckSquare } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { Todo } from '../../models/todoModel'
import { showErrorToast } from '../../utils/toastMessage'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist = ({ todos, setTodos }: Props) => {

    const handleChangeStatus = (el: Todo) => {

        setTodos(todos.map((todo) => {
            if (todo.id === el.id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))

    }

    /* 
This function checks the "id" property of each "todo" object in the "todos" array and returns true if the "id" property of the "todo" object is not equal to the "id" property of the "el" object. This means that the element with the same id as the "el" object will be excluded from the filtered array.

The filtered array is then passed to the setTodos() function, which updates the state of the todos with the filtered array.


*/
    const handleDeletetask = (el: Todo) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== el.id
        }))
        showErrorToast("Successfully deleted from list")
    }


    return (
        <>
            {
                todos.length > 0 && <div className='flex flex-wrap justify-center mt-20 gap-5 font-raleway text-[24px] p-2  '>
                    {
                        todos.map((el) => {
                            return (
                                <>
                                    <div className='flex items-center gap-5 bg-teal-400 px-[1rem] py-[0.2rem] rounded-[8px] cursor-pointer'>
                                        <p className='' key={el.id} id={(el.id.toString())}>
                                            {el.id}. {el.title}
                                        </p>
                                        <div className='flex gap-2'>
                                            <BiTrash onClick={() => {
                                                handleDeletetask(el)
                                            }} />

                                            {!el.completed ? <BsCheckSquare onClick={() => {
                                                handleChangeStatus(el)
                                                document.getElementById(el.id.toString())!.style.textDecoration = "line-through"
                                            }}
                                            /> : <RxCross2 onClick={() => {
                                                handleChangeStatus(el)
                                                document.getElementById(el.id.toString())!.style.textDecoration = "none"
                                            }} />}

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            }

        </>
    )
}

export default Todolist