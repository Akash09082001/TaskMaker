import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Logo from '../atoms/Logo'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <div className="flex w-full flex-grow relative">
            <div className="magicpattern"></div>
            <div className="flex absolute backdrop-blur-sm  w-full h-full ">

                <div className="flex flex-col w-full h-fit my-auto gap-5 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 w-full gap-5 md:grid-cols-2">
                        <div className="flex flex-col gap-10 w-full">
                            <Logo />
                            <div className="flex flex-col w-fit gap-5">
                                <h1 className='text-3xl font-bold'>Your Ultimate Todo Companion</h1>
                                <span className='text-yellow-500 font-semibold text-lg'>Streamline Your Productivity with Ease</span>
                                <p>TaskMaster simplifies task management with intuitive features and seamless collaboration, helping you stay organized and focused. Say goodbye to overwhelm and hello to productivity.</p>
                                <div className="flex gap-5 w-full">
                                    <Button asChild className={cn("w-full max-w-36 px-10")} >
                                        <Link href="./dashboard" >Go To Dashboard</Link>
                                    </Button>
                                    {/* <Button asChild className={cn("w-full max-w-36 px-10 bg-yellow-500 text-white hover:text-black")} >
                                        <Link href="./sign-up" >Sign Up</Link>
                                    </Button> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="flex w-full justify-end">
                                <Image
                                    src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTU3NzczMDh8&ixlib=rb-4.0.3&q=85"
                                    alt="My Image"
                                    width={800}
                                    height={300}
                                    className='rounded-lg cursor-'
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Hero
