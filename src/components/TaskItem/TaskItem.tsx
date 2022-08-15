import { Task } from '../../types';
import { FaTrash, FaPen } from 'react-icons/fa';
import useTasksContext from '../../hooks/useTasksContext';
import useFormContextSetters from '../../hooks/useFormContextSetters';

interface Props {
    task: Task
};

const TaskItem = ({ task }: Props) => {

    const { deleteTask } = useTasksContext();
    const { setTaskToEdit } = useFormContextSetters();

    const handleEdit = (): void => {
        setTaskToEdit?.( task );
    }

    const handleDelete = (): void => {
        const remove = confirm( '¿Desea eliminar esta tarea?' );
        ( remove ) && deleteTask?.( task.id );
    }

    return (
        <li className='list-none bg-gray-300 select-none rounded-md p-4 flex items-center justify-between'>
            <span className="d-inline-block w-full overflow-hidden text-ellipsis">
                { task.title }
            </span>

            <span className='flex items-center justify-center gap-8 shrink-0 ml-10'>
                <FaPen title='Editar' className='hover:scale-125 cursor-pointer' onClick={ handleEdit } />
                <FaTrash title='Eliminar' className='hover:scale-125 cursor-pointer' onClick={ handleDelete } />
            </span>
        </li>
    );

}

export default TaskItem;