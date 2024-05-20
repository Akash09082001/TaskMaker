import React from 'react'
import CreateTodo from './CreateTodo'
import { Card } from '../ui/card'
import { Folder } from 'lucide-react'

const EmptyState = () => {
    return (
        <Card className="text-center w-full max-w-sm p-5 gap-5 flex flex-col backdrop-blur-sm">
            <Folder className='mx-auto h-10 w-10' />
            <strong className='text-xl'>No Todos Added</strong>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a New Todo</p>
            <div className="mt-6">
                <CreateTodo />
            </div>
        </Card>
    )
}

export default EmptyState
