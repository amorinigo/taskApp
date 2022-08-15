import { Task } from '../../types'
import { TasksReducerAction } from '../reducers/tasksReducer'
import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_TASKS } from './action_type'

export const addTask = ( task: Task ): TasksReducerAction => {

    return {
        type: ADD_TASK,
        payload: task
    };
    
}

export const deleteTask = ( id: Task['id'] ): TasksReducerAction => {

    return {
        type: DELETE_TASK,
        id
    };
    
}

export const editTask = ( task: Task ): TasksReducerAction => {

    return {
        type: EDIT_TASK,
        payload: task
    };
    
}

export const setTasks = ( tasks: Task[] ): TasksReducerAction => {

    return {
        type: SET_TASKS,
        payload: tasks
    };
    
}