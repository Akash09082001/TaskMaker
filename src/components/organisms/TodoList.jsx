"use client"

import { getTodos } from '@/actions/services';
import { useEffect, useState } from 'react';
import DeleteTodo from '../atoms/DeleteTodo';
import SkeletonCard from '../molecules/SkeletonCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import EditTodo from './EditTodo';
import EmptyState from './EmptyState';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchTodos = async () => {
            try {
                const res = await getTodos();
                if (!res.ok) {
                    throw new Error("Failed to fetch todo list");
                }
                const sortedTodos = res.todos.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                setTodos(sortedTodos);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error("Failed to Fetch Todos:", error);
            }
        };
        fetchTodos();
    }, []);

    return (
        <>
            {
                loading ? (
                    <div className="flex w-full flex-1">
                        <SkeletonCard />
                    </div>
                ) : (
                    todos.length === 0 ? (
                        <div className="flex w-full flex-grow flex-1 items-center justify-center">
                            <EmptyState />
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-fit lg:grid-cols-3 w-full'>
                            {todos.map(todo => (
                                <Card key={todo._id} className="backdrop-blur-sm h-full w-full">
                                    <CardHeader className="flex flex-row gap-2 items-center w-full">
                                        <CardTitle className="w-full text-base lg:text-lg">{todo.title}</CardTitle>
                                        <EditTodo id={todo._id} />
                                        <DeleteTodo id={todo._id} />
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="scrollBar-hide">
                                            {todo.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )
                )
            }
        </>
    );
};

export default TodoList;
