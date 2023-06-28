import "./taskList.scss"

const TaskList = ({ taskList, completeTask, setUpdateData, deleteTask }) => {
  return (
    <>
      {taskList &&
        taskList
          .sort((a, b) => b.id - a.id)
          .map((task) => {
            return (
              <div
                key={task.id}
                className="taskList"
              >
                <div className="task-container">
                  <div className="listed-task">
                    <span
                      title="Complete"
                      onClick={(e) => completeTask(task.id)}
                    >
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    <span className={task.status ? "done" : "task-title"}>
                      {task.title}
                    </span>
                  </div>
                  <div className="icons-container">
                    {task.status ? null : (
                      <span
                        title="Edit"
                        onClick={() => setUpdateData(task)}
                      >
                        <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                      </span>
                    )}

                    <span
                      title="Delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
    </>
  )
}

export default TaskList
