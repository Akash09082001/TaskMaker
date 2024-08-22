import SearchBar from '@/components/molecules/SearchBar'
import CreateTodo from '@/components/organisms/CreateTodo'
import TodoList from '@/components/organisms/TodoList'

const page = () => {
    return (
        <div className='flex relative w-full flex-1 pb-4 divide-y-2 flex-col px-4 gap-2'>
            <div className="flex w-full backdrop-blur-md gap-4">
                <div className="flex flex-1 items-center">
                    <span className='text-2xl font-bold'>All Todos</span>
                </div>
                <div className="flex gap-4">
                    <SearchBar />
                    <CreateTodo />
                </div>
            </div>
            <div className="flex w-full h-[calc(100%-50px)] pt-2 overflow-y-scroll scrollbar-hide">
                <TodoList />
            </div>
        </div>
    )
}

export default page

