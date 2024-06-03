export default function NewTaskForm({ todos = [], setTodos }) {
    const nextId = todos[todos.length - 1].id;

    function addTodo(event) {
      const todo = {
        id: nextId + 1,
        title: event.target.value,
        completed: false,
        time: Date.now()
      }

      if(event.key === 'Enter') {
        setTodos([...todos, todo]);
        event.target.value = '';
      }
    }

    return (
        <>
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={addTodo} autoFocus />
        </>
    )
}