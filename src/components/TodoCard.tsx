
// Types:
import { FC, MouseEvent } from 'react';
import { Todo } from '../types/TodoTypes';

// Components:
import UrgencyIndicator from './UrgencyIndicator';

// Context:
import { useTodoListContext } from "../context/TodoListContext";

const TodoCard: FC<Todo> = ({ id, title, author, urgency, description }) => {

    const { deleteTodo } = useTodoListContext();

    const handleDeleteTodo = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        deleteTodo(id);
    }

    return <>
        <div
            key={id}
            className='shadow-xl mb-6 py-5 px-[22px]
            border-[1px] border-zinc-300 rounded-md'
        >
            <div
                className='flex justify-between'
            >
                <div className='flex'>
                    <img
                        className='w-7 h-7 mr-2 select-none'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
                    />
                    <h1 className='font-bold text-xl'>
                        {title}
                    </h1>
                </div>
                <span>
                    ~{author}
                </span>
            </div>
            <div
                className={`${description && 'mb-1'} mt-1`}
            >
                <UrgencyIndicator
                    urgency={urgency}
                />
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
            <button
                className='button'
                onClick={handleDeleteTodo}
            >
                Delete
            </button>
        </div>
    </>
}

export default TodoCard;

