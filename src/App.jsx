
import TaskForm from "./components/TaskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="To do"/>
        <TaskColumn title="Doing"/>
        <TaskColumn title="Done"/>
      </main>
    </div>
  )
}

export default App;