import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <main className="flex w-full items-center justify-center">
            <div className="text-center">
                <p className="text-3xl font-semibold text-yellow-400">404</p>
                <Label className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</Label>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button>
                        <Link href={"/"}>Go to Home</Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default notFound
