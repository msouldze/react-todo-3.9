import '../styles/Footer.css'
import TasksFilter from "./TasksFilter"


export default function Footer({ todos = [], setTodos }) {
    const activeTodos = todos.filter(todo => !todo.completed);

    function handleDelete() {
        setTodos([...activeTodos]);
    }

    return (
        <>
            <footer className="footer">
                <span className="todo-count">{activeTodos.length} items left</span>
                <TasksFilter />
                <button className="clear-completed" onClick={handleDelete}>Clear completed</button>
            </footer>
        </>
    )
}