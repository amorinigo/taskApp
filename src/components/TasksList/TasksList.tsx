import useTasksContext from '../../hooks/useTasksContext';
import TaskItem from '../TaskItem/TaskItem';
import TaskListLayout from './TaskListLayout';

const TasksList = () => {

    const { tasks, loadingTasks } = useTasksContext();

    if( loadingTasks ) {

        return (
            <p className='text-center mt-12'>Cargando tareas...</p>
        );
        
    }

    return(
        <TaskListLayout>
            {
                tasks.length === 0 ? (
                    <p className='text-center mt-12'>¡No hay tareas!</p>
                ) : (
                    <ul className='flex flex-col gap-6'>
                        {
                            tasks.map( task => (
                                <TaskItem task={ task } key={ task.id } />
                            ) )
                        }
                    </ul>
                )
            }
        </TaskListLayout>
    );
    
};

export default TasksList;