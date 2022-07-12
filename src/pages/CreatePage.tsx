
// Types:
import { FC } from 'react';

// Components:
import CreateTodoForm from '../components/CreateTodoForm';

const CreatePage: FC = () => {

    return <>
        <div className='flex flex-col items-center'>
            <h1
                className='text-2xl text-center font-semibold mb-9'
            >
                Create a new Todo:
            </h1>
            <CreateTodoForm />
        </div>
    </>
}

export default CreatePage;


