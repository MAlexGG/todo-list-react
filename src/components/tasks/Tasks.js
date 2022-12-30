import React, { useEffect, useState } from 'react';
import { todoService } from '../../services/todoService';
import Form from '../form/Form';
import Task from '../task/Task';
import { CtTasks } from './Tasks.styled';

const api = todoService();

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState();

    useEffect(() => {  
        api.get().then((res) => setTasks(res.data));
    }, []);

    const createTask = (data) => {
        api.create(data).then((res) => {
            if (res.status === 201) {
                setTasks([...tasks, res.data]);
            };
        });
        alert('Su tarea ha sido creada correctamente');
    };

    const updateTask = (data) => {
        api.update(data).then((res) => {
            if (res.status === 200) {
                const editedTask = tasks.map(task => task.id === data.id ? data : task);
                setTasks(editedTask);
            };
        });
        alert('Su tarea ha sido editada correctamente');
    };

    const deleteTask = (id) => {
        api.destroy(id).then((res) => {
            if (res.status === 200) {
                const remainTasks = tasks.filter(task => task.id !== id);
                setTasks(remainTasks);
            };
        });
        alert('Su tarea ha sido borrada correctamente');
    };
 
  return (
      <>    
          <Form createTask={createTask} editTask={editTask} setEditTask={setEditTask} updateTask={updateTask} />
          <CtTasks>
              {
                  tasks.map((task, index) => (
                      <Task task={task} key={index} deleteTask={deleteTask} setEditTask={setEditTask} />
                  ))
              }
          </CtTasks>
      </>
  )
}

export default Tasks