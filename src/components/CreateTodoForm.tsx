
// Context:
import { useTodoListContext } from "../context/TodoListContext";

// Hooks:
import { useState } from 'react';

// Routing:
import { useNavigate } from "react-router-dom";

// Types: 
import { FC, ChangeEvent, MouseEvent } from 'react';
import { Todo } from '../types/TodoTypes';
type urgency = 1 | 2 | 3 | 4 | 5;

const CreateTodoForm: FC = () => {

    // State:
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [urgency, setUrgency] = useState<urgency>(1);

    // State functions:
    const handleSetTitle = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    }

    const handleSetAuthor = (e: ChangeEvent<HTMLInputElement>): void => {
        setAuthor(e.target.value);
    }

    const handleSetDescription = (e: ChangeEvent<HTMLInputElement>): void => {
        setDescription(e.target.value);
    }

    const handleSetUrgency = (e: ChangeEvent<HTMLSelectElement>): void => {
        setUrgency(parseInt(e.target.value) as urgency);
    }

    // Routing:
    const navigate = useNavigate();

    // Context functions:
    const { addTodo } = useTodoListContext();

    // Handle Add function:
    const handleAdd = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const newTodo: Todo = {
            id: new Date().getTime(),
            title,
            author,
            description,
            urgency
        }
        addTodo(newTodo);
        navigate('/');
    }

    return <>
        <form
            className='flex flex-col items-center container'
        >
            <input 
                type="text"
                placeholder='Author'
                className='createTodoInput'
                onChange={handleSetAuthor}
            />
            <input
                type="text"
                placeholder='Title'
                className='createTodoInput'
                onChange={handleSetTitle}
            />
            <input
                type="text"
                placeholder='Description (optional)'
                className='createTodoInput'
                onChange={handleSetDescription}
            />
            <label
                className='mb-2.5'
            >
                Urgency:
            </label>
            <select
                className='createTodoInput'
                defaultValue={urgency}
                onChange={handleSetUrgency}
            >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button
                className='button'
                onClick={handleAdd}
            >
                Create New Todo
            </button>
        </form>
    </>
}

export default CreateTodoForm;

