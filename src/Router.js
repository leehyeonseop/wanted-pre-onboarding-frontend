import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="todo" element={<TodoPage />} />
        </>,
    ),
);

export default router;
