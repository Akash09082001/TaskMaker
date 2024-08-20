import CreateTodo from '@/components/organisms/CreateTodo'
import TodoList from '@/components/organisms/TodoList'

const page = () => {
    return (
        <div className='flex relative w-full flex-1 md:py-4 flex-col px-4 gap-4'>
            <div className="flex w-full h-[calc(100%-50px)] overflow-y-scroll scrollbar-hide">
                <TodoList />
            </div>
            <div className="flex w-full backdrop-blur-md">
                <CreateTodo />
            </div>
        </div>
    )
}

export default page

