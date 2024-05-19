import CreateTodo from '@/components/organisms/CreateTodo'
import TodoList from '@/components/organisms/TodoList'
import React from 'react'

const page = () => {
    return (
        <div className='flex relative w-full h-full flex-col pb-12 gap-5'>
            <div className="flex w-full fixed z-10 bottom-4 left-0 backdrop-blur-md px-4">
                <CreateTodo />
            </div>
            <div className="flex w-full">
                <TodoList />
            </div>
        </div>
    )
}

export default page
