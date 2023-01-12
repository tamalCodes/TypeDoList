import React, { useEffect, useState } from 'react'
import "./InputField.css"

interface Props {
    todo: String,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({ todo, setTodo }: Props) => {

    const [input, setInput] = useState('')



    return (


        <>
            <form action="submit">
                <input type="text" placeholder='Input your task !' className='font-raleway w-[60vw] h-[2.5rem] rounded-[3px] mt-[2.7rem] bg-gray-200 text-[24px] ' />
            </form>
        </>
    )
}

export default InputField