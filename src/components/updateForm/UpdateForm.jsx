import "./updateForm.scss"

const UpdateForm = ({ updateData, changeHolder, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="updateForm">
        <div className="input-container">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeHolder(e)}
            className="input"
            required
            autoFocus
            maxLength={60}
            placeholder="Enter Task"
          />
        </div>
        <button
          onClick={updateTask}
          className="updateBtn"
        >
          Update
        </button>
        <button
          onClick={cancelUpdate}
          className="cancelBtn"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default UpdateForm
