"use client"

import React, { useState } from 'react'
import InputFieldTextWithLabel from './InputFieldTextWithLabel'
import InputFieldTextAreaWithLabel from './InputFieldTextAreaWithLabel'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { addTodo } from '@/actions/services'

const AddTodoForm = ({ className, closeDialog }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!title || !description === "") {
                alert("Title and description required")
            } else {
                await addTodo(title, description)
                closeDialog();
            }

        } catch (error) {
            console.error("Error creating todo:", error);
            alert("Failed to create todo. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn("grid items-start w-full gap-4", className)} >
            <div className="grid w-full gap-5">

                <InputFieldTextWithLabel
                    labelText={"Title"}
                    inputId={"title"}
                    inputType={"text"}
                    inputPlaceholder={"Add Your Todo Title"}
                    inputValue={title}
                    inputOnChange={handleTitle}

                />
                <InputFieldTextAreaWithLabel
                    labelText={"Description"}
                    textareaId={"textarea"}
                    textareaPlaceholder={"Add Your Todo Description..."}
                    textareaValue={description}
                    textareaOnChange={handleDescription}
                />
            </div>
            <div className="flex w-full">
                <Button type="submit" className="w-full">Add Todo</Button>
            </div>

        </form>
    )
}

export default AddTodoForm
