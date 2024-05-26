import './styles/App.css'
import TaskProvider from './components/TaskProvider.jsx'
import FilterProvider from './components/FilterProvider.jsx'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <TaskProvider>
      <FilterProvider>
        <TodoApp />
      </FilterProvider>
    </TaskProvider>
  )
}

export default App
