import React, { useEffect, useState } from 'react';
import { Task } from '../types';
import { fetchTasks } from '../services/api';
import TaskComponent from './Task';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadTasks = async () => {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
            setLoading(false);
        };

        loadTasks();
    }, []);

    if (loading) {
        return <div>Loading tasks...</div>;
    }

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <TaskComponent task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;