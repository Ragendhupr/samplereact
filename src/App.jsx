import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Nav from "./component/Nav.jsx";
import Input from "./component/Input.jsx";
import Mains from "./component/Mains.jsx";

function App() {
  const [handleModal, setHandleModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [select, setSelect] = useState(null);

  return (
    <>
      <Nav setHandleModal={setHandleModal} setShowSidebar={setShowSidebar} />
      {handleModal && (
        <Input
          setHandleModal={setHandleModal}
          task={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
      <Mains
        tasks={tasks}
        setTasks={setTasks}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        select={select}
        setSelect={setSelect}
      />
    </>
  );
}

export default App;
