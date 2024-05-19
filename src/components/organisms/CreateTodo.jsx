"use client"

import useMediaQuery from '@/hooks/useMediaQuery';
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { cn } from '@/lib/utils';
import AddTodoForm from '../molecules/AddTodoForm';

const CreateTodo = ({ className }) => {
    const [open, setOpen] = useState(false);
    const isDeskTop = useMediaQuery("(min-width: 786px)");

    return (
        <div className='flex w-full'>
            {isDeskTop ? (
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="flex-1 w-full flex">Add Todo</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-sm">
                        <DialogHeader>
                            <DialogTitle>Add Your Todo</DialogTitle>
                            <DialogDescription>Quickly add tasks here to stay organized and productive!</DialogDescription>
                        </DialogHeader>
                        <AddTodoForm closeDialog={() => setOpen(false)} />
                    </DialogContent>
                </Dialog>
            ) : (
                <Drawer open={open} onOpenChange={setOpen} className={cn("w-full", className)}>
                    <DrawerTrigger asChild>
                        <Button className="flex-1 w-full flex">Add Todo</Button>
                    </DrawerTrigger>
                    <DrawerContent className="max-w-3xl w-full">
                        <DrawerHeader>
                            <DrawerTitle>Add Your Todo</DrawerTitle>
                            <DrawerDescription>Quickly add tasks here to stay organized and productive!</DrawerDescription>
                        </DrawerHeader>
                        <AddTodoForm closeDialog={() => setOpen(false)} className={"px-4"} />
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            )}
        </div>
    );
}

export default CreateTodo
