import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {

    const [doneList, setDoneList] = useState([]);
    const [todoLists, setTodoLists] = useState([]);
    useEffect(() => {
        let _doneList = toDoList.filter((val) => {
            if (val.complete == true) return val;
        })
        setDoneList(_doneList);
        let _todoList = toDoList.filter((val) => {
            if (val.complete != true) return val;
        })
        setTodoLists(_todoList);
    }, [toDoList])

    return (
        <div className="container">


            <div className="row text-center">
                <div className="col-sm-12">
                    <button className="mr-5 btn btn-primary" onClick={handleFilter}>Clear Completed</button>
                </div>

                <div className="col-sm-4 btn btn-dark">  <h2>TO DO</h2>
                    {todoLists.map(todo => {
                        return (
                            <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                        )
                    })}
                </div>
                <div className="col-sm-4 btn btn-success">
                    <h2>Done</h2>
                    {doneList.map(todo => {
                        return (
                            <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                        )
                    })}
                </div>
                <div className="col-sm-4 btn btn-warning">  <h2>ALL LIST</h2>
                    {toDoList.map(todo => {
                        return (
                            <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                        )
                    })}
                </div>
            </div>


        </div>
    );
};

export default ToDoList;