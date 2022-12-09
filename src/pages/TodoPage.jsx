import { Button, List } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from 'react';
import { StyledTextField, Wrapper } from './TodoPage.style';
import Todo from '../components/Todo';
import { useTodo } from '../hooks/useTodo';

const TodoPage = () => {
    const [todo, setTodo] = useState('');
    const [checked, setChecked] = useState([0]);

    const { todoList, getTodos, createTodo, deleteTodo } = useTodo();

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    useEffect(() => {
        return () => {
            getTodos();
        };
    }, []);

    return (
        <Wrapper>
            <h1>TODO PAGE</h1>
            <div>
                <StyledTextField
                    id="standard-basic"
                    label="Standard"
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
                        return (
                            <Todo
                                key={value.id}
                                id={value.id}
                                checked={value.isCompleted}
                                text={value.todo}
                                deleteTodo={deleteTodo}
                            />
                        );
                    })}
            </List>
        </Wrapper>
    );
};

export default TodoPage;
