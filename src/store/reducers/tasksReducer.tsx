import { Task } from '../../types';
import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_TASKS } from '../actions/action_type';

export type TasksReducerAction = {
    type: typeof ADD_TASK,
    payload: Task
} | {
    type: typeof DELETE_TASK,
    id: string,
} | {
    type: typeof EDIT_TASK,
    payload: Task
} | {
    type: typeof SET_TASKS,
    payload: Task[]
}

const tasksReducer = ( state: Task[], action: TasksReducerAction ) => {

    switch ( action.type ) {
        case SET_TASKS:
            return action.payload;
        
        case ADD_TASK:
            return [ ...state, action.payload ];

        case DELETE_TASK:
            return state.filter( task => task.id !== action.id );

        case EDIT_TASK:
            const taskIndex = state.findIndex( task => task.id === action.payload.id );
            state[taskIndex].title = action.payload.title;
            return [ ...state ];
    
        default:
            return state;
    }

}

export default tasksReducer;