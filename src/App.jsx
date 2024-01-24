import "./App.scss";
import { useState } from "react";

function App() {
  const [tasks, settasks] = useState([
    {
      id: 1,
      task: "Take the cat to the vet",
    },
    {
      id: 2,
      task: "Go to the market",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    settasks([...tasks, { id: tasks.length + 1, task: e.target[0].value }]);
    e.target[0].value = "";
  };

  const updateTask = (taskid) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskid);
    if (taskIndex !== -1) {
      const currentTaskValue = tasks[taskIndex].task;
  
      const updatedValue = prompt("Update task:", currentTaskValue);

      if (updatedValue !== null && updatedValue.trim() !== "") {
        const updatedTasks = [...tasks];

        updatedTasks[taskIndex].task = updatedValue;

        settasks(updatedTasks);
      }
    }
  };

  const deleteTask = (taskid) => {
    //MAP THROUGH ARRAY => CREATE NEW ARRAY WITHOUT TASK WITH MATCHING ID
    // const updatedTasks = tasks.filter((task) => task.id !== taskid);
    // settasks(updatedTasks);

    //USING SPLICE => FIND ID => IF NOT THERE UPDATE ARRAY => IF THERE DELETE
    const taskIndex = tasks.findIndex((task) => task.id === taskid);
    // console.log(taskIndex);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(taskIndex, 1);
      settasks(updatedTasks);
    }
  };

  return (
    <div className="container">
      <h2>To do App</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Add task" />
        <button type="submit">AddTask</button>
      </form>
      <div className="tasks">
        {tasks.map((taskname) => {
          return (
            <div key={taskname.id} className="Tasklist">
              <div className="task-text">{taskname.task}</div>
              <div className="task-buttons">
                <button onClick={() => updateTask(taskname.id)}>
                  Update
                </button>
                <button onClick={() => deleteTask(taskname.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
