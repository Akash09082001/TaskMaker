"use server"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DeleteTodo from '../atoms/DeleteTodo';
import EditTodo from './EditTodo';
import { getTodos } from '@/actions/services';
import EmptyState from './EmptyState';

const TodoList = async () => {

    const response = await getTodos();
    const todos = response.todos;

    // if (!todos || todos === 0) {
    //     return (
    //         <div className="flex w-full flex-grow flex-1 items-center justify-center">
    //             <EmptyState />
    //         </div>
    //     )
    // }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 w-full'>
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
