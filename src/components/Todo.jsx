import {
    Button,
    Checkbox,
    ListItem,
    ListItemText,
    TextField,
} from '@mui/material';
import { useState } from 'react';

const Todo = (props) => {
    const { checked, text, id, deleteTodo, updateTodo } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [updateText, setUpdateText] = useState(text);
    const [isCompleted, setIsCompleted] = useState(checked);

    return (
        <>
            <ListItem disablePadding>
                <Checkbox
                    edge="start"
                    checked={isCompleted}
                    tabIndex={-1}
                    onClick={() => isEdit && setIsCompleted(!isCompleted)}
                />
                {isEdit ? (
                    <TextField
                        fullWidth
                        id="standard-basic"
                        variant="standard"
                        value={updateText}
                        onChange={(e) => setUpdateText(e.target.value)}
                    />
                ) : (
                    <ListItemText primary={text} />
                )}
                <Button
                    onClick={() =>
                        isEdit
                            ? updateTodo(id, updateText, isCompleted) &&
                              setIsEdit(!isEdit)
                            : setIsEdit(!isEdit)
                    }
                    variant="outlined"
                    color="success"
                >
                    {isEdit ? '확인' : '수정'}
                </Button>
                <Button
                    onClick={() =>
                        isEdit ? setIsEdit(!isEdit) : deleteTodo(id)
                    }
                    variant="outlined"
                    color="error"
                >
                    {isEdit ? '취소' : '삭제'}
                </Button>
            </ListItem>
        </>
    );
};

export default Todo;
