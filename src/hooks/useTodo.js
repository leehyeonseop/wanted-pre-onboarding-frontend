import { useState } from 'react';
import { axiosInstance, getJWTHeader } from '../axiosInstance';

export const useTodo = () => {
    const [todoList, setTodoList] = useState('');

    const getTodos = async () => {
        try {
            const response = await axiosInstance.get('todos', {
                headers: getJWTHeader(),
            });
            response.status === 200 && setTodoList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createTodo = async (todo) => {
        try {
            const response = await axiosInstance.post(
                'todos',
                {
                    todo,
                },
                {
                    headers: getJWTHeader(),
                },
            );
            response.status === 201 && getTodos();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await axiosInstance.delete(`todos/${id}`, {
                headers: getJWTHeader(),
            });
            response.status === 204 && getTodos();
        } catch (error) {
            console.error(error);
        }
    };

    return { todoList, getTodos, createTodo, deleteTodo };
};
