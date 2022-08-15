import { FormContextProvider } from '../../../contexts/FormContext';
import TaskForm from '../../TaskForm/TaskForm';
import TasksList from '../../TasksList/TasksList';

const Layout = () => {

    return (
        <FormContextProvider>
            <main className="mx-auto mt-[50px] mb-[50px] max-w-5xl w-4/5">
                <TaskForm />
                <TasksList />
            </main>
        </FormContextProvider>
    );

}

export default Layout;