export interface Task {
    id: number;
    title: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
    completed: boolean;
}

export interface NewTask {
    title: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
}