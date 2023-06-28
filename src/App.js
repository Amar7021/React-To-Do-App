import { useEffect, useState } from "react"
import TaskForm from "./components/taskForm/TaskForm"
import UpdateForm from "./components/updateForm/UpdateForm"
import TaskList from "./components/taskList/TaskList"
import "./App.scss"

// getting taskLists from localStorage
const getLocalStorage = () => JSON.parse(localStorage.getItem("taskList")) || []

function App() {
  const [tasks, setTasks] = useState("")
  const [updateData, setUpdateData] = useState("")
  const [taskList, setTaskList] = useState(getLocalStorage())

  // Add task
  const addTask = () => {
    if (tasks) {
      const num = Date.now()
      setTaskList([...taskList, { id: num, title: tasks, status: false }])

      setTasks("")
    }
  }

  // Delete task
  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  // Complete Task
  const completeTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    )
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData("")
  }

  // Change task for update
  const changeHolder = (e) => {
    setUpdateData({ ...updateData, title: e.target.value })
  }

  // Update task
  const updateTask = () => {
    let removeOldRecord = [...taskList].filter(
      (task) => task.id !== updateData.id
    )
    setTaskList([...removeOldRecord, updateData])

    setUpdateData("")
  }

  // adding to localStorage
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className="app">
      <h2>React To Do App</h2>
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeHolder={changeHolder}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          addTask={addTask}
        />
      )}

      {taskList && taskList.length ? (
        ""
      ) : (
        <p className="displayText">No Tasks To Display!</p>
      )}

      <TaskList
        taskList={taskList}
        completeTask={completeTask}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
