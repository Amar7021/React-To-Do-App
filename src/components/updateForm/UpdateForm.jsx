import "./updateForm.scss"

const UpdateForm = ({ updateData, changeHolder, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="updateForm">
        <div className="input-container">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeHolder(e)}
            className="form-control form-control-lg"
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
