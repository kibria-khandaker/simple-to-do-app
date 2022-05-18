import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ToDoList = () => {
    //  Task send to DB Option function start 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const url = `http://localhost:5000/task/`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(addResult => {
                handleSubmit(addResult)
                reset()
                console.log('Success:', addResult);
            })
    };
    //  Task send to DB Option function end---------------

    //  Task Get from DB Option function start
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/task`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);
    //  Task Get from DB Option function end---------------

    //  Task Delete from DB & UI Option function start
    const handelForDeleteTask = id => {
        const confirmDelete = window.confirm('Are you Sure to Delete the item');
        if (confirmDelete) {
            const url = `http://localhost:5000/task/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    const remainingTask = tasks.filter(task => task._id !== id)
                    setTasks(remainingTask)
                })
        }
    }
    //  Task Delete from DB & UI Option function end------------------

    return (
        <section>
            <h1 className="text-center mt-5 mb-3">To Do List</h1>
            <div className="container w-75 mx-auto text-center">

                {/* Task send to DB Form start */}
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-row gap-2  justify-content-center'>
                    <input placeholder='Task Name' {...register("name")} />
                    <textarea placeholder='Short Description' {...register("shortText")} />
                    <input type="submit" value='Add Task' id="add_btn" className="btn btn-danger" />
                </form>
                {/* Task send to DB Form end */}
                {tasks.length}

                <div className="mt-5">
                    <table className="table text-start">
                        <thead>
                            <tr>
                                <th scope="col">Number</th>
                                <th scope="col">Task Name</th>
                                <th scope="col">Description</th>
                                <th className='text-end' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody id="content-container">

                            {/* single task row start */}
                            {
                                tasks.map(task => <tr id="table-content" key={task._id} >
                                    <th scope="row">1</th>
                                    <td>{task.name}</td>
                                    <td>{task.shortText}</td>
                                    <td className='text-end'>
                                        <button  onClick={() => handelForDeleteTask(task._id)}  class="btn btn-danger delete_btn mx-1">Delete</button>
                                        <button class="btn btn-success done_btn">Done</button>
                                    </td>
                                </tr>)
                            }
                            {/* single task row end */}

                        </tbody>
                    </table>
                </div>
                {/* table  */}
            </div>
        </section>
    );
};

export default ToDoList;