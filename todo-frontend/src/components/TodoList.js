import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false
        };
        
        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <form onSubmit={handleAddTodo} className="todo-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo..."
                    className="todo-input"
                />
                <button type="submit" className="add-button">Add Todo</button>
            </form>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="todo-checkbox"
                        />
                        <span className="todo-text">{todo.text}</span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList; 