"use client"

import React from 'react'
import InputFieldTextWithLabel from './InputFieldTextWithLabel'
import InputFieldTextAreaWithLabel from './InputFieldTextAreaWithLabel'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const EditTodoForm = ({ className }) => {
    return (
        <form className={cn("grid items-start gap-4", className)} >
            <div className="grid w-full gap-5">

                <InputFieldTextWithLabel
                    labelText={"Edit Title"}
                    inputId={"title"}
                    inputType={"text"}
                    inputPlaceholder={"Add Your Todo Title"}
                />
                <InputFieldTextAreaWithLabel
                    labelText={"Edit Description"}
                    textareaId={"textarea"}
                    textareaPlaceholder={"Add Your Todo Description..."}
                />


            </div>
            <div className="flex w-full">
                <Button type="submit" className="w-full">Add Todo</Button>
            </div>

        </form>
    )
}

export default EditTodoForm
