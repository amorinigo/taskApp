import { Task } from '../types';

const url = 'http://localhost:4000/tasks';

export const getAllTasks = async <TResponse,>(): Promise<TResponse> => {

    const req = await fetch( url );
    const resp = await req.json();
    return resp as TResponse;
    
}

export const addTaskToDB = async ( task: Task ): Promise<Task> => {

    const options = {
        method: 'POST',
        body: JSON.stringify( task ),
        headers: { 'Content-Type': 'application/json' }
    };

    const req = await fetch( url, options );
    const resp = await req.json();
    return resp as Task;

}

export const editTaskFromDB = async ( task: Task ): Promise<Task> => {

    const { title, id } = task;

    const options = {
        method: 'PATCH',
        body: JSON.stringify({ title }),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = await fetch( `${ url }/${ id }`, options );
    const resp = await req.json();
    return resp as Task;
    
}

export const deleteTaskFromDB = async ( id: string ): Promise<{}> => {

    const options = {
        method: 'DELETE'
    };
    
    const req = await fetch( `${ url }/${ id }`, options );
    const resp = await req.json();
    return resp as {};
    
}