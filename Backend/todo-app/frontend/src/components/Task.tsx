import React from 'react';

interface TaskProps {
    id: number;
    title: string;
    description: string;
    priority: string;
    completed: boolean;
    onComplete: (id: number) => void;
    onRemove: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, description, priority, completed, onComplete, onRemove }) => {
    return (
        <div className={`task ${completed ? 'completed' : ''}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Priority: {priority}</p>
            <button onClick={() => onComplete(id)} disabled={completed}>
                {completed ? 'Completed' : 'Complete Task'}
            </button>
            <button onClick={() => onRemove(id)}>Remove Task</button>
        </div>
    );
};

export default Task;