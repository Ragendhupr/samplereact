export default function Input({
  setHandleModal,
  task,
  setTask,
  tasks,
  setTasks,
}) {
  function closeModal() {
    setHandleModal(false);
  }

  function showInput(e) {
    setTask(e.target.value);
  }

  function taskList() {
    setTasks([...tasks, task]);
    setTask("");
    setHandleModal(false);
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col gap-4 w-80 p-6 bg-white shadow-2xl rounded-2xl">
        <input
          type="text"
          placeholder="What's Now...."
          value={task}
          onChange={showInput}
          className="border p-2 rounded"
        />
        <button
          onClick={taskList}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Now
        </button>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
