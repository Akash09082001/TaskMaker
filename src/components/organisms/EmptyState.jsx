import Image from 'next/image'

const EmptyState = () => {
    return (
        <div className="text-center w-full max-w-7xl p-5 gap-5 grid grid-cols-1 lg:grid-cols-2 backdrop-blur-sm">
            <div className="flex flex-col gap-5 items-center justify-center w-full">
                <strong className='text-xl md:text-2xl lg:text-3xl'>No Todos Added</strong>
                <p className="text-sm md:text-base lg:text-lg text-gray-500">Get started by creating a New Todo</p>
            </div>
            <div className="flex w-full">
                <div className="aspect-square w-full relative">
                    <Image
                        src={'/assets/banner-img/add-todo-banner.png'}
                        alt='add todo banner'
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default EmptyState
