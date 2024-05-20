
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DeleteTodo from '../atoms/DeleteTodo';
import EditTodo from './EditTodo';
import { getTodos } from '@/actions/services';

const TodoList = async () => {

    const response = await getTodos();
    const todos = response.todos;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 w-full'>
            {todos.map(todo => (
                <Card key={todo._id} className="backdrop-blur-sm h-fit w-full">
                    <CardHeader className="flex flex-row gap-2 items-center w-full">
                        <CardTitle className="w-full">{todo.title}</CardTitle>
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
