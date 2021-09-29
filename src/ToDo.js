import React from 'react';

const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }


    return (
        <div className={`list-group-item list-group-item-action`} id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} >
            {todo.task}
        </div>
    );
};

export default ToDo;