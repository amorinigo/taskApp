import { createContext, useEffect, useMemo, useState } from 'react';
import { Task } from '../types';

interface Props {
    children ?: React.ReactNode
}

type FormContextStateI = {
    term : string,
    taskToEdit : Task | null
}

type FormContextSetterI = {
    setTerm : React.Dispatch<React.SetStateAction<string>> | null,
    setTaskToEdit : React.Dispatch<React.SetStateAction<Task | null>> | null
}

export const FormContextState = createContext<FormContextStateI>({
    term: '',
    taskToEdit: null
});

export const FormContextSetters = createContext<FormContextSetterI>({
    setTerm : null,
    setTaskToEdit : null
});

export const FormContextProvider = ( { children }: Props ) => {

    const [ term, setTerm ] = useState( '' );
    const [ taskToEdit, setTaskToEdit ] = useState<Task | null>( null );

    const contextStateValue = useMemo( () => ({
        term,
        taskToEdit
    }), [ term, taskToEdit ] );

    const contextSettersValue = useMemo( () => ({
        setTerm,
        setTaskToEdit
    }), [ setTerm, setTaskToEdit ] );

    return (
        <FormContextSetters.Provider value={ contextSettersValue }>
            <FormContextState.Provider value={ contextStateValue }>
                { children }
            </FormContextState.Provider>
        </FormContextSetters.Provider>
    );

};