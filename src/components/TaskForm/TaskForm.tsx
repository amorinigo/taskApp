import { FormEvent, useEffect } from 'react';
import useFormContextSetters from '../../hooks/useFormContextSetters';
import useFormContextState from '../../hooks/useFormContextState';
import useTasksContext from '../../hooks/useTasksContext';
import { v4 as uuid } from 'uuid';

const TaskForm = () => {

    const { term, taskToEdit } = useFormContextState();
    const { setTerm, setTaskToEdit } = useFormContextSetters();
    const { addTask, editTask } = useTasksContext();

    useEffect( () => {

        ( taskToEdit?.id ) 
            ? setTerm?.( taskToEdit.title ) 
            : setTerm?.( '' );

    }, [ taskToEdit ] );

    const resetForm = (): void => {
        setTaskToEdit?.( null );
        setTerm?.( '' );
    }

    const handleTask = (): void => {

        if( taskToEdit?.id ) {
            const editedTask = {
                ...taskToEdit,
                title: term.trim()
            }

            editTask?.( editedTask );
        } else {
            const newTask = {
                title: term.trim(),
                date: new Date(),
                id: uuid()
            };

            addTask?.( newTask );
        }
        
    }

    const handleSubmit = ( e: FormEvent<HTMLFormElement> ): void => {

        e.preventDefault();
        const isValidTerm = term && term.trim().length >= 3;
        
        if( !isValidTerm ) {
            return alert( 'Tarea inválida. Debe tener como mínimo 3 caracteres.' );
        }

        handleTask();
        resetForm();
        
    }

    return(
        <form
            noValidate 
            autoComplete="off" 
            onSubmit={ handleSubmit }
            className="flex flex-col sm:flex-row"
        >
            <input
                type="text"
                name="todoInput"
                placeholder="Escribe una tarea..."
                className="w-full bg-transparent border p-4 sm:p-3 border-zinc-800 placeholder:text-zinc-800 text-zinc-800 selection:bg-zinc-800 selection:text-white focus:outline-none" 
                value={ term }
                onChange={ e => setTerm?.( e.target.value ) }
            />

            <input 
                type="submit"
                value={ `${ taskToEdit ? 'Modificar' : 'Agregar' }` }
                className="shrink-0 py-3 mt-5 sm:m-0 sm:ml-5 px-10 text-slate-50 cursor-pointer font-medium bg-zinc-800 hover:bg-transparent hover:text-zinc-800 border border-zinc-800 transition-colors duration-300"
            />
        </form>
    );
    
};

export default TaskForm;