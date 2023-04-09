import React, { useEffect, useState } from 'react';
import { CtForm, CtFormButtons, FormButton, FormInput, FormLable, FormSpan } from './Form.styled';

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
          <CtForm onSubmit={handleSubmit}>
              <FormLable htmlFor="task">Crear tarea</FormLable>
              <FormInput type="text" name='task' onChange={handleChange} value={form.task} />
              {error && <FormSpan>{error}</FormSpan>}
              <CtFormButtons>
                <FormButton type='submit' color='var(--main-color)' background='var(--secondary-color)'>{ editTask ? 'Editar tarea' : 'Crear tarea'}</FormButton>
                <FormButton type='reset' color='var(--secondary-color)' background='var(--main-color)' onClick={handleReset}>Cancelar</FormButton>
              </CtFormButtons>
          </CtForm>
      </>
  )
}

export default Form