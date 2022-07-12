
// Types:
import { FC, MouseEvent } from 'react';

// Routing:
import { useNavigate } from "react-router-dom"; 

const ButtonToForm: FC = () => {

    const navigate = useNavigate();

    const handleNavigate = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        navigate('/create');
    }

    return <>
        <div className='mb-8'>
            <button
                className='button text-xl'
                onClick={handleNavigate}
            >
                Create a new Todo
            </button>
        </div>
    </>
}

export default ButtonToForm;

