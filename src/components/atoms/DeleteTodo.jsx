"use client"

import React from 'react'
import { Trash } from 'lucide-react'
import { Button } from '../ui/button'

const DeleteTodo = ({ id }) => {

    return (
        <Button variant="outline" >
            <Trash className='h-[1rem] w-[1rem]' />
        </Button>
    )
}

export default DeleteTodo
