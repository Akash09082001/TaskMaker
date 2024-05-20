"use client"

import React, { useEffect, useState } from 'react';
import InputFieldTextWithLabel from './InputFieldTextWithLabel';
import InputFieldTextAreaWithLabel from './InputFieldTextAreaWithLabel';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { getTodoById, updateTodoById } from '@/actions/services';

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
            {loading && <div>Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}
            <div className="grid w-full gap-5">
                <InputFieldTextWithLabel
                    labelText={"Edit Title"}
                    inputId={"title"}
                    inputType={"text"}
                    inputPlaceholder={"Add Your Todo Title"}
                    inputValue={newTitle}
                    inputOnChange={handleTitle}
                />
                <InputFieldTextAreaWithLabel
                    labelText={"Edit Description"}
                    textareaId={"textarea"}
                    textareaPlaceholder={"Add Your Todo Description..."}
                    textareaValue={newDescription}
                    textareaOnChange={handleDescription}
                />
            </div>
            <div className="flex w-full">
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Updating..." : "Update Todo"}
                </Button>
            </div>
        </form>
    )
}

export default EditTodoForm;
