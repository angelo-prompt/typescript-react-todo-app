
// Types:
import { FC } from 'react';

// Context:
import { useTodoListContext } from "../context/TodoListContext";

// Components:
import TodoCard from "./TodoCard";

const TodoList: FC = () => {

    const { todoList } = useTodoListContext();

    return <>
        <div
            className='container'
        >
            {todoList.map(todo => (
                <TodoCard
                    id={todo.id}
                    title={todo.title}
                    author={todo.author}
                    urgency={todo.urgency}
                    description={todo.description}
                />
            ))}
        </div>
    </>
}

export default TodoList;

