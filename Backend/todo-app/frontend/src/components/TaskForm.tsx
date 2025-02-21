import React, { useState } from 'react';
import { NewTask } from '../types';
import { addTask } from '../services/api';

const TaskForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: NewTask = { title, description, priority };
        await addTask(newTask);
        setTitle('');
        setDescription('');
        setPriority('Low');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Priority:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;