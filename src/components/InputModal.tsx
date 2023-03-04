import React, { useState } from 'react'
import "../styles/InputModal.css"
import { showSuccessToast } from '../utils/toastMessage';

interface InputModalProps {
    setshowModal: React.Dispatch<React.SetStateAction<boolean>>;
    addEmptyTask: (title: string, columText: string) => void;
    columntext: string;
}

const InputModal = ({ setshowModal, addEmptyTask, columntext }: InputModalProps) => {

    const [task, settask] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        settask(e.target.value);
    }

    return (
        <div className='im_parent'>

            <div className='im_sub'>
                <button className='im_closebtn' onClick={() => {
                    setshowModal(false);
                    document.body.style.overflowY = "auto";
                }}>X</button>
                <h1>Enter your task</h1>
                <div className="input-group im_input  mb-3">
                    <input type="text" className="form-control" placeholder="Add your task here" aria-label="Recipient's username" aria-describedby="button-addon2" autoFocus value={task} name="task" onChange={handleChange} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {
                        if (task.length > 0) {
                            addEmptyTask(task, columntext);
                            setshowModal(false);
                            document.body.style.overflowY = "auto";
                            showSuccessToast("Task added successfully")
                        }

                    }}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default InputModal