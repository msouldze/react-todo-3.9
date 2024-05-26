import NewTaskForm from './NewTaskForm.jsx'
import TaskList from './TaskList.jsx'
import Footer from './Footer.jsx'
import { useTasksListContext } from "./TaskProvider";

export default function TodoApp() {
  const { todos, setTodos, isLoading } = useTasksListContext();

  return (
    <section className='todoapp'>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm todos={todos} setTodos={setTodos} />
      </header>
      <section className="main">
        <TaskList todos={todos} setTodos={setTodos} isLoading={isLoading} />
        <Footer todos={todos} setTodos={setTodos} />
      </section>
    </section>
  )
}