import { Button, IconButton, List } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from 'react';
import { H1, StyledTextField, Wrapper } from './TodoPage.style';
import Todo from '../components/Todo';
import { useTodo } from '../hooks/useTodo';
import { getToken, removeToken } from '../localStorage';
import { useNavigate } from 'react-router-dom';

const TodoPage = () => {
    const [todo, setTodo] = useState('');
    const navigate = useNavigate();

    const { todoList, getTodos, createTodo, deleteTodo, updateTodo } =
        useTodo();

    useEffect(() => {
        getToken() === null && navigate('/');
        return () => {
            getTodos();
        };
    }, []);

    return (
        <>
            <H1>TODO PAGE</H1>
            <Button
                onClick={() => {
                    removeToken();
                    navigate('/');
                }}
                variant="contained"
                endIcon={<LogoutIcon />}
            >
                LOGOUT
            </Button>
            <Wrapper>
                <div>
                    <StyledTextField
                        id="standard-basic"
                        label="TODO"
                        variant="standard"
                        placeholder="해야 할 일을 입력해주세요"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <Button
                        onClick={() => createTodo(todo)}
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        disabled={todo.length === 0}
                    >
                        추가
                    </Button>
                </div>

                <List>
                    {todoList &&
                        todoList.map((value) => {
                            console.log(value);
                            return (
                                <Todo
                                    key={value.id}
                                    id={value.id}
                                    checked={value.isCompleted}
                                    text={value.todo}
                                    deleteTodo={deleteTodo}
                                    updateTodo={updateTodo}
                                />
                            );
                        })}
                </List>
            </Wrapper>
        </>
    );
};

export default TodoPage;
