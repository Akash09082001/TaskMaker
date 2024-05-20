"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DeleteTodo from '../atoms/DeleteTodo';
import EditTodo from './EditTodo';
import { getTodos } from '@/actions/services';
import EmptyState from './EmptyState';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await getTodos();
                if (!res.ok) {
                    throw new Error("Failed to fetch todo list");
                }
                setTodos(res.todos);
            } catch (error) {
                setError(error.message);
                console.error("Failed to Fetch Todos:", error);
            }
        };
        fetchTodos();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (todos.length === 0) {
        return (
            <div className="flex w-full flex-grow flex-1 items-center justify-center">
                <EmptyState />
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-fit lg:grid-cols-3 w-full'>
            {todos.map(todo => (
                <Card key={todo._id} className="backdrop-blur-sm h-fit w-full">
                    <CardHeader className="flex flex-row gap-2 items-center w-full">
                        <CardTitle className="w-full text-base lg:text-lg">{todo.title}</CardTitle>
                        <EditTodo id={todo._id} />
                        <DeleteTodo id={todo._id} />
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            {todo.description}
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default TodoList;
