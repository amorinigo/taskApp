import { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';

const useTasksContext = () => {
    const tasksContext = useContext( TasksContext );
    return tasksContext;
}

export default useTasksContext;
