import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) => task.id === id
        ? {...task, reminder: !task.reminder} : task 
      )
    )
  }

  // Add Task
  const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task, }
      setTasks([...tasks, newTask])
    }

  return (
    <div className="container">
      <Header onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      )
      : (
        'Add a Task.'
      )}
    </div>
  );

}

export default App;
