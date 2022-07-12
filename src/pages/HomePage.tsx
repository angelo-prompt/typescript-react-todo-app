
// Types:
import { FC } from 'react';

// Components:
import TodoList from "../components/TodoList";
import ButtonToForm from '../components/ButtonToForm';

export const HomePage: FC = () => {

    return <>
        <div
            className='flex flex-col items-center'
        >
            <ButtonToForm />
            <TodoList />
        </div>
    </>
}

export default HomePage;


