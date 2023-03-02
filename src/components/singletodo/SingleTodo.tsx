import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { BiTrash } from 'react-icons/bi'
import { BsCheckSquare } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { showErrorToast } from '../../utils/toastMessage'
import { Todo } from '../../models/todoModel'
import { AiOutlineSave } from 'react-icons/ai'

interface Props {
    el: Todo,
    index: number,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ el, index, todos, setTodos }: Props) => {

    const [isEdit, setisEdit] = useState<boolean>(false);
    const [editText, seteditText] = useState<string>(el.title);


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
    This function checks the "id" property of each "todo" object in the "todos" array and returns true if the "id" property of the "todo" object is not equal to the "id" property of the "el" object. This means that the element with the same id as the "el" object will be excluded from the    filtered array.

    The filtered array is then passed to the setTodos() function, which updates the state of the todos with the filtered array.
    */


    const handleDeletetask = (el: Todo) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== el.id
        }))
        showErrorToast("Successfully deleted from list")
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        seteditText(e.target.value);
    }

    const handleSave = () => {
        setTodos(todos.map((todo) => {
            if (todo.id === el.id) {
                return {
                    ...todo,
                    title: editText
                }
            }
            return todo
        }))
        setisEdit(!isEdit)
    }

    return (
        <>
            <div className='flex items-center gap-5 bg-teal-400 px-[2rem] py-[0.2rem] rounded-[8px] cursor-pointer' key={index}>
                {el.completed ?
                    <s className='' key={el.id} id={(el.id.toString())}>
                        {el.id}. {el.title}
                    </s>

                    : isEdit ?
                        <input type="text" value={editText} onChange={handleChange} name="editText" autoFocus className='px-2 my-1' />
                        :
                        <p className='' key={el.id} id={(el.id.toString())}>
                            {el.id}. {el.title}
                        </p>
                }
                <div className='flex gap-2'>


                    {
                        !isEdit && <BiTrash onClick={() => {
                            handleDeletetask(el)
                        }} />
                    }


                    {!el.completed ? <>
                        {
                            !isEdit && <BsCheckSquare onClick={() => {
                                handleChangeStatus(el)
                            }}
                            />
                        }

                        {isEdit ? <AiOutlineSave onClick={() => {
                            handleSave()
                        }} /> : <FiEdit onClick={() => {
                            setisEdit(!isEdit)
                        }} />}



                    </>
                        : <RxCross2 onClick={() => {
                            handleChangeStatus(el)

                        }} />}



                </div>
            </div>
        </>
    )
}

export default SingleTodo