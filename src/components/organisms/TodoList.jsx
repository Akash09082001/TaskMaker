import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DeleteTodo from '../atoms/DeleteTodo';
import EditTodo from './EditTodo';

const TodoList = () => {

    const todos = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 w-full'>
                {
                    todos.map((todo, index) => (
                        <Card key={index} className="backdrop-blur-sm h-fit w-full">
                            <CardHeader className="flex flex-row gap-2 items-center w-full">
                                <CardTitle className="w-full">title {todo}</CardTitle>
                                <EditTodo id={todo} />
                                <DeleteTodo id={todo} />
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    description {todo}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export default TodoList
