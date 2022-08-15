import { useContext } from 'react';
import { FormContextState } from '../contexts/FormContext';

const useFormContextState = () => {
    const formContextState = useContext( FormContextState );
    return formContextState;
};

export default useFormContextState;