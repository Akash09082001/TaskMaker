"use client"

import useMediaQuery from '@/hooks/useMediaQuery';
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Edit } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { cn } from '@/lib/utils';
import EditTodoForm from '../molecules/EditTodoForm';

const EditTodo = ({ className, id }) => {
    const [open, setOpen] = useState(false);
    const isDeskTop = useMediaQuery("(min-width: 786px)");

    const todoId = id;

    if (isDeskTop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <Edit className='h-[1rem] w-[1rem]' />
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Edit Your Todo</DialogTitle>
                        <DialogDescription>Modify existing tasks easily with our intuitive edit feature.</DialogDescription>
                    </DialogHeader>
                    <EditTodoForm id={todoId} closeDialog={() => setOpen(false)} />
                </DialogContent>
            </Dialog>
        );
    }
    return (
        <Drawer open={open} onOpenChange={setOpen} className={cn("w-full", className)}>
            <DrawerTrigger asChild>
                <Button variant="outline">
                    <Edit className='h-[1rem] w-[1rem]' />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-w-3xl">
                <DrawerHeader>
                    <DrawerTitle>Edit Your Todo</DrawerTitle>
                    <DrawerDescription>Modify existing tasks easily with our intuitive edit feature.</DrawerDescription>
                </DrawerHeader>
                <EditTodoForm id={todoId} className={"px-4"} closeDialog={() => setOpen(false)} />
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};


export default EditTodo
