import SkeletonCard from '@/components/molecules/SkeletonCard'
import React from 'react'

const loading = () => {
    return (
        <div className='flex w-full flex-grow flex-1 items-center justify-center'>
            <SkeletonCard />
        </div>
    )
}

export default loading
