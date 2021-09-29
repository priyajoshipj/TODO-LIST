import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.length>0){
            addTask(userInput);
            setUserInput("");
        }       
    }
    return (
        <div className="text-center container p-5">
            <div class="input-group mb-3">
                <input type="text" value={userInput} class="form-control form-control-lg" onChange={handleChange} placeholder="enter task" />
                <button class="input-group-append" onClick={handleSubmit}>
                    <span class="input-group-text">SUBMIT</span>
                </button>
            </div>
        </div>
    );
};

export default ToDoForm;