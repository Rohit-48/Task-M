import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>Todo List Manager</h1>
                <TaskForm />
                <Switch>
                    <Route path="/" exact component={TaskList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;