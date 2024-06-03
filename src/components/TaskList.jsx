import '../styles/TaskList.css';
import Task from "./Task";
import { useFiltersContext } from './FilterProvider';

function TaskList({ todos = {}, setTodos }) {
    const { filterMethods, filters } = useFiltersContext();

    const filter = Object.keys(filters).filter(btn => filters[btn])

    function handleDelete(id) {
        const reducedList = todos.filter(todo => todo.id !== id)
        setTodos([...reducedList]);
    }

    function handleChange(id, e) {
        const [todo] = todos.filter(todo => todo.id === id);
        todo.title = e.target.value;
        setTodos([...todos]);
    }

    function handleCheck(id, e) {
        const [todo] = todos.filter(todo => todo.id === id);
        todo.completed = e.target.checked;
        setTodos([...todos]);
    }

    const filteredTodoList = todos.filter(filterMethods[filter]);
    
    return (
        <>
            <ul className="todo-list">
                {filteredTodoList.length > 0 ?
                    filteredTodoList
                    .map((todo) => 
                    <Task todo={todo} key={todo.id} onDelete={handleDelete} onChange={handleChange} onChecked={handleCheck} />)
                    : <div className="nocontent">There are no completed tasks yet.</div>
                }
            </ul>
        </>
    )
}

export default TaskList;