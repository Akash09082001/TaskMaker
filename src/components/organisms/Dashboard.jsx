"use client";

import { useState } from "react";
import { removeTodo } from "@/actions/todo";
import EmptyState from "@/components/atoms/EmptyState";
import TodoDialog from "@/components/molecules/TodoDialog";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Trash } from "lucide-react";

const Dashboard = ({ initialTodos }) => {
    const [todos, setTodos] = useState(initialTodos);

    const handleDelete = async (id) => {
        await removeTodo(id);
        setTodos(todos.filter(todo => todo._id !== id));
    };

    if (todos.length === 0) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <EmptyState />
            </div>
        );
    }

    return (
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {todos.map(todo => (
                <Card key={todo._id} className="h-full w-full backdrop-blur-sm">
                    <CardHeader className="flex w-full flex-row items-center gap-2">
                        <CardTitle className="w-full text-base lg:text-lg">
                            {todo.title}
                        </CardTitle>
                        <TodoDialog initialData={todo} />
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => handleDelete(todo._id)}
                        >
                            <Trash className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{todo.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Dashboard;
