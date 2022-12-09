import { Button, Checkbox, ListItem, ListItemText } from '@mui/material';
import { useTodo } from '../hooks/useTodo';

const Todo = (props) => {
    const { checked, text, id, deleteTodo } = props;

    return (
        <>
            <ListItem disablePadding>
                <Checkbox edge="start" checked={checked} tabIndex={-1} />
                <ListItemText primary={text} />
                <Button variant="outlined" color="success">
                    수정
                </Button>
                <Button
                    onClick={() => deleteTodo(id)}
                    variant="outlined"
                    color="error"
                >
                    삭제
                </Button>
            </ListItem>
        </>
    );
};

export default Todo;
