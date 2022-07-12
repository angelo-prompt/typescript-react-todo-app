
// Context API:
import { createContext, useState, useContext, ReactNode } from 'react';

// Sample todos data:
import { sampleTodos } from '../data/sampleInitialTodos';

// Types:
import { Todo } from '../types/TodoTypes';

interface TodoListContext {
    todoList: Todo[]
    addTodo: (newTodo: Todo) => void;
    deleteTodo: (id: number) => void;
    getTodoListLength: () => number;
}

interface Props {
    children: ReactNode;
}

// Default value:
export const TodoListContext = createContext({} as TodoListContext);

// Use Todo List Context custom hook:
export const useTodoListContext = () => {
    return useContext(TodoListContext);
}

export const TodoListContextProvider = ({ children }: Props) => {

    const [todoList, setTodoList] = useState<Todo[]>(sampleTodos);

    const addTodo = (newTodo: Todo): void => {
        setTodoList(current => [...current, newTodo]);
    }

    const deleteTodo = (id: number): void => {
        setTodoList(current => {
            return current.filter(todo => todo.id !== id);
        })
    }

    const getTodoListLength = (): number => {
        return todoList.length;
    }

    return (
        <TodoListContext.Provider
            value={{
                todoList,
                addTodo, deleteTodo,
                getTodoListLength
            }}
        >
            {children}
        </TodoListContext.Provider>
    )
}

