import React from 'react'

function Task({task, deleteTask, setEditTask}) {
  return (
      <>
          <p>{task.task}</p>
          <button onClick={() => setEditTask(task)}>editar</button>
          <button onClick={() => deleteTask(task.id)}>borrar</button>
      </>
  )
}

export default Task