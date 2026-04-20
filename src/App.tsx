import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoItem } from './components/TodoItem'
import { TodoFilter } from './components/TodoFilter'
import './App.css'

export default function App() {
  const { todos, allTodos, filter, setFilter, addTodo, toggleTodo, deleteTodo, clearCompleted } =
    useTodos()

  const activeCount = allTodos.filter(t => !t.completed).length
  const completedCount = allTodos.filter(t => t.completed).length

  return (
    <div className="app">
      <div className="card">
        <h1>TODO</h1>
        <TodoInput onAdd={addTodo} />
        {allTodos.length > 0 ? (
          <>
            <ul className="todo-list">
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
            <TodoFilter
              current={filter}
              activeCount={activeCount}
              completedCount={completedCount}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
            />
          </>
        ) : (
          <p className="empty">タスクがありません。上のフォームから追加してください。</p>
        )}
      </div>
    </div>
  )
}
