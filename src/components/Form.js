import React, { useEffect, useState } from 'react';

const initialForm = {
    id: null,
    task: ''
};

function Form({createTask, editTask, setEditTask, updateTask}) {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        editTask ? setForm(editTask) : setForm(initialForm);
    }, [editTask])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.task) {
            console.log('escribe una tarea');
            return;
        };
        form.id === null ? createTask(form) : updateTask(form);
        handleReset();
    };

    const handleReset = () => {
        setForm(initialForm);
        setEditTask('');
    };

  return (
      <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>  
            <input type="text" name='task' onChange={handleChange} value={form.task} />  
              <button type='submit'>{ editTask ? 'Editar tarea' : 'Crear tarea'}</button>  
        </form>
      </>
  )
}

export default Form