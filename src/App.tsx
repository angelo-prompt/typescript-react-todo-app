
import './App.css';

//Context:
import { TodoListContextProvider } from './context/TodoListContext';

// Routing:
import { Routes, Route } from 'react-router-dom';

// Pages:
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';

// Components:
import Title from './components/Title';

const App = () => {

    return <>
        <TodoListContextProvider>
            <Title />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/create' element={<CreatePage />} />
            </Routes>
        </TodoListContextProvider>
    </>
}

export default App;


