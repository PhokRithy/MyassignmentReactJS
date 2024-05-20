
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <section className="task_column">Todo</section>
        <section className="task_column">Doing</section>
        <section className="task_column">Done</section>
      </main>
    </div>
  )
}

export default App;