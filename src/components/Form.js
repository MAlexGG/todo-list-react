import React, { useEffect, useState } from 'react';

const initialForm = {
    id: null,
    task: ''
};

function Form({createTask, editTask, setEditTask, updateTask}) {

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState('');

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
            setError('Escribe una tarea');
            return;
        };
        form.id === null ? createTask(form) : updateTask(form);
        handleReset();
    };

    const handleReset = () => {
        setForm(initialForm);
        setEditTask('');
        setError('');
    };

  return (
      <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Tarea</label>  
            <input type="text" name='task' onChange={handleChange} value={form.task} />  
              {error && <span>{error}</span>}  
            <button type='submit'>{ editTask ? 'Editar tarea' : 'Crear tarea'}</button>  
        </form>
      </>
  )
}

export default Form