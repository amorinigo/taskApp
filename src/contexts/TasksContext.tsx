import { createContext, useCallback, useEffect, useReducer, useState} from 'react';
import { addTaskToDB, deleteTaskFromDB, editTaskFromDB, getAllTasks } from '../services/tasksServices';
import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_TASKS } from '../store/actions/action_type';
import tasksReducer from '../store/reducers/tasksReducer';
import { Task } from '../types';

interface Props {
    children ?: React.ReactNode
};

export type TasksContextInterface = {
    tasks        : Task[],
    loadingTasks : boolean,
    addTask      : (( task: Task ) => void) | null,
    deleteTask   : (( id: string ) => void) | null,
    editTask     : (( task: Task ) => void) | null
};

export const TasksContext = createContext<TasksContextInterface>( {
    tasks: [],
    loadingTasks : false,
    addTask: null,
    deleteTask: null,
    editTask: null
} );

export const TasksContextProvider = ( { children }: Props ) => {

    const [ tasks, dispatch ] = useReducer( tasksReducer, [] );
    const [ loadingTasks, setLoadingTasks ] = useState( true );
    
    useEffect( () => {
        
        getAllTasks<Task[]>()
            .then( resp => {

                dispatch({
                    type: SET_TASKS,
                    payload: resp
                });

                setLoadingTasks( false );

            } )
            .catch( err => {
                alert( 'Ha ocurrido un error al cargar las tareas, por favor reinicie la aplicación.' );
                setLoadingTasks( false );
            } );
        
    }, [] );

    const addTask = useCallback( (task: Task): void => {
        
        addTaskToDB( task )
            .then( resp => {
                
                dispatch({
                    type: ADD_TASK,
                    payload: task
                });
            
            } )
            .catch( err => {
                alert( 'No se ha podido agregar la tarea, por favor vuelva a intentarlo.' );
            } );
            
    }, [] );

    const deleteTask = useCallback( (id: string): void => {

        deleteTaskFromDB( id )
            .then( resp => {

                dispatch({
                    type: DELETE_TASK,
                    id
                });
                
            } )
            .catch( err => {
                alert( 'Ha ocurrido un error al eliminar la tarea, por favor vuelva a intentarlo.' );
            } )
        
    }, [] );

    const editTask = useCallback( (task: Task): void => {

        editTaskFromDB( task )
            .then( resp => {

                dispatch({
                    type: EDIT_TASK,
                    payload: task
                });
                
            } )
            .catch( err => {
                alert( 'Ha ocurrido un error al eliminar la tarea, por favor vuelva a intentarlo.' );
            } )
        
    }, [] );

    return (
        <TasksContext.Provider 
            value={{
                tasks,
                loadingTasks,
                addTask,
                deleteTask,
                editTask
            }}
        >
            { children }
        </TasksContext.Provider>
    );

};

export default TasksContextProvider;