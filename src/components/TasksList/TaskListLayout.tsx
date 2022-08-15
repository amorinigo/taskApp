interface Props {
    children ?: React.ReactNode
}

export const TaskListLayout = ({children}: Props) => {

    return(
        <div className='mt-6'>
            { children }
        </div>
    );
    
}

export default TaskListLayout;