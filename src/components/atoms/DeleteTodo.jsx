"use client"

import React from 'react';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { removeTodo } from '@/actions/services';

const DeleteTodo = ({ id }) => {

    const handleDelete = async (e) => {
        e.preventDefault();
        await removeTodo(id);
    };

    return (
        <form onSubmit={handleDelete}>
            <Button type="submit" variant="outline">
                <Trash className='h-4 w-4' />
            </Button>
        </form>
    );
};

export default DeleteTodo;
