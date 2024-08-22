"use client"

import { addTodo } from '@/actions/services'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import InputFieldTextAreaWithLabel from './InputFieldTextAreaWithLabel'
import InputFieldTextWithLabel from './InputFieldTextWithLabel'

const AddTodoForm = ({ className, closeDialog }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!title || !description === "") {
                toast.warning("Title and description required")
            } else {
                await addTodo(title, description)
                closeDialog();
            }

        } catch (error) {
            console.error("Error creating todo:", error);
            toast.warning("Failed to create todo. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn("grid items-start w-full gap-4", className)} >
            <div className="grid w-full gap-5">

                <InputFieldTextWithLabel
                    label={"Title"}
                    id={"title"}
                    type={"text"}
                    placeholder={"Add Your Todo Title"}
                    value={title}
                    inputOnChange={handleTitle}

                />
                <InputFieldTextAreaWithLabel
                    label={"Description"}
                    teaId={"textarea"}
                    placeholder={"Add Your Todo Description..."}
                    value={description}
                    onChange={handleDescription}
                />
            </div>
            <div className="flex w-full">
                <Button type="submit" className="w-full">Add Todo</Button>
            </div>

        </form>
    )
}

export default AddTodoForm
