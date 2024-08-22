"use client"

import { getTodoById, updateTodoById } from '@/actions/services';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import InputFieldTextAreaWithLabel from './InputFieldTextAreaWithLabel';
import InputFieldTextWithLabel from './InputFieldTextWithLabel';

const EditTodoForm = ({ className, closeDialog, id }) => {
    const [newId, setNewId] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodo = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await getTodoById(id);

                if (res && res.todo) {
                    const { _id, title, description } = res.todo;
                    setNewId(_id);
                    setNewTitle(title);
                    setNewDescription(description);
                } else {
                    throw new Error("Invalid API response structure");
                }
            } catch (error) {
                console.error('Error in fetching todo:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchTodo();
    }, [id]);

    const handleTitle = (e) => setNewTitle(e.target.value);
    const handleDescription = (e) => setNewDescription(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await updateTodoById(newId, newTitle, newDescription);
            if (res) {
                console.log('Todo updated successfully');
                closeDialog();
            } else {
                throw new Error('Failed to update todo');
            }
        } catch (error) {
            console.error('Error in updating todo:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn("grid items-start gap-4", className)}>
            {
                loading ? (
                    <div className="grid w-full gap-5">
                        <div className="flex w-full">
                            <Skeleton className={"h-10 w-full"} />
                        </div>
                        <div className="flex w-full">
                            <Skeleton className={"h-20 w-full"} />
                        </div>
                        <div className="flex w-full">
                            <Skeleton className={"h-10 w-full"} />
                        </div>
                    </div>
                ) : (
                    <div className="grid w-full gap-5">
                        <InputFieldTextWithLabel
                            label={"Edit Title"}
                            id={"title"}
                            type={"text"}
                            placeholder={"Add Your Todo Title"}
                            value={newTitle}
                            onChange={handleTitle}
                        />
                        <InputFieldTextAreaWithLabel
                            label={"Edit Description"}
                            teaId={"textarea"}
                            placeholder={"Add Your Todo Description..."}
                            value={newDescription}
                            onChange={handleDescription}
                        />
                    </div>
                )
            }
            <div className="flex w-full">
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Updating..." : "Update Todo"}
                </Button>
            </div>
        </form>
    )
}

export default EditTodoForm;
