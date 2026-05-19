import { useState } from "react";

export default function Mains({
  tasks,
  setTasks,
  showSidebar,
  setShowSidebar,
  select,
  setSelect,
}) {
  const [checked, setChecked] = useState([]);

  function showAll() {
    setSelect(null);
  }

  function toggleCheck(index) {
    setChecked((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));

    setChecked((prev) => prev.filter((item) => item !== index));

    if (select === tasks[index]) {
      setSelect(null);
    }
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  const selectedIndex =
    select !== null ? tasks.findIndex((item) => item === select) : -1;

  return (
    <div className="flex">
      <div
        className={`
          fixed md:static top-0 left-0
          h-screen bg-violet-200 p-5
          w-2/3 sm:w-1/3 md:w-1/4
          transition-transform duration-300
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <button onClick={closeSidebar} className="md:hidden mb-4">
          ✖
        </button>

        <h1 className="text-xl font-bold mb-5">My Tasks</h1>

        <p
          onClick={showAll}
          className="cursor-pointer text-base px-3 mt-2 font-semibold hover:bg-violet-300 rounded p-2"
        >
          All Todo's
        </p>

        {tasks.map((item, index) => (
          <p
            key={index}
            onClick={() => setSelect(item)}
            className="mb-3 bg-white p-2 rounded truncate cursor-pointer hover:bg-blue-100"
          >
            {item}
          </p>
        ))}
      </div>

      <main className="w-full p-6">
        <h1 className="text-2xl font-bold mb-5">Todo List</h1>

        {tasks.length === 0 && <p>No Tasks Added</p>}

        {select !== null && selectedIndex !== -1 && (
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded mb-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={checked.includes(selectedIndex)}
                onChange={() => toggleCheck(selectedIndex)}
              />

              <p
                className={
                  checked.includes(selectedIndex)
                    ? "line-through text-gray-400"
                    : ""
                }
              >
                {select}
              </p>
            </div>

            <button
              onClick={() => deleteTask(selectedIndex)}
              className="text-red-500 text-xl"
            >
              🗑️
            </button>
          </div>
        )}

        {select === null &&
          tasks.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded mb-3"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={checked.includes(index)}
                  onChange={() => toggleCheck(index)}
                />

                <p
                  className={
                    checked.includes(index) ? "line-through text-gray-400" : ""
                  }
                >
                  {item}
                </p>
              </div>

              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 text-xl"
              >
                🗑️
              </button>
            </div>
          ))}
      </main>
    </div>
  );
}
