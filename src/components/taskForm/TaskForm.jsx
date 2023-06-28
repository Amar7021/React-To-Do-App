import "./taskForm.scss"

const TaskForm = ({ tasks, setTasks, addTask }) => {
  return (
    <div className="taskForm">
      <div className="input-container">
        <input
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          className="input"
        />
      </div>
      <button
        onClick={addTask}
        className="addBtn"
      >
        Add Task
      </button>
    </div>
  )
}

export default TaskForm
