import { useContext } from 'react';
import { FormContextSetters } from '../contexts/FormContext';

const useFormContextSetters = () => {

    const formContextSetters = useContext( FormContextSetters );
    return formContextSetters;

};

export default useFormContextSetters;