import React, { useEffect, useState } from 'react';
import { todoService } from '../../services/todoService';
import Form from '../form/Form';
import Task from '../task/Task';
import { CtTasks } from './Tasks.styled';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const api = todoService();

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState();

    const MySwal = withReactContent(Swal);

    useEffect(() => {  
        api.get().then((res) => setTasks(res.data));
    }, []);

    const createTask = (data) => {
        api.create(data).then((res) => {
            if (res.status === 201) {
                setTasks([...tasks, res.data]);
            };
        });
        ;
        MySwal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu tarea ha sido creada correctamente',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const updateTask = (data) => {
        api.update(data).then((res) => {
            if (res.status === 200) {
                const editedTask = tasks.map(task => task.id === data.id ? data : task);
                setTasks(editedTask);
            };
        });
        MySwal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu tarea ha sido editada correctamente',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const deleteTask = (id) => {
        Swal.fire({
            title: '¿Quieres borrar esta tarea?',
            text: "¡No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--main-color)',
            cancelButtonColor: 'var(--warning-color)',
            confirmButtonText: '¡Si, bórrala!'
        }).then((result) => {
            if (result.isConfirmed) {
                api.destroy(id).then((res) => {
                    const remainTasks = tasks.filter(task => task.id !== id);
                    setTasks(remainTasks);
                });
                Swal.fire(
                    '¡Borrada!',
                    'Tu tarea ha sido borrada',
                    'success'
                )
            }
        })
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