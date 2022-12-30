import React from 'react';
import editImg from '../../assets/img/edit.svg';
import deleteImg from '../../assets/img/delete.svg';
import { BtTask, CtTask, ImgTask, TxtTask } from './Task.styled'

function Task({task, deleteTask, setEditTask}) {
  return (
    <>
      <CtTask>
        <TxtTask>{task.task}</TxtTask>
        <BtTask onClick={() => setEditTask(task)}>
          <ImgTask src={editImg} alt='edit button'/>
        </BtTask>
        <BtTask onClick={() => deleteTask(task.id)}>
          <ImgTask src={deleteImg} alt='delete button' />
        </BtTask>
      </CtTask>
          {/* <p>{task.task}</p>
          <button onClick={() => setEditTask(task)}>editar</button>
          <button onClick={() => deleteTask(task.id)}>borrar</button> */}
      </>
  )
}

export default Task