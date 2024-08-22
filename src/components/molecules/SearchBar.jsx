"use client"

import { searchTodo } from "@/actions/services"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { Button } from "../ui/button"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import { Skeleton } from "../ui/skeleton"
import SidebarTodo from "./SidebarTodo"

const SearchBar = () => {

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [todos, setTodos] = useState([])

    const searchQuery = useDebouncedCallback(async (query) => {
        setQuery(query)
        setLoading(true)
        const resp = await searchTodo(query)
        if (!resp) {
            setLoading(false)
            throw new Error("Failed to fetch todo list");
        }
        setLoading(false)
        setTodos(resp)
    }, 500)

    return (
        <>
            <Button onClick={() => setOpen(true)} variant="outline" className="gap-2">
                <span className="text-gray-500">Search</span>
                <MagnifyingGlassIcon className="size-5 text-gray-500" />
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen} className="p-2">
                <Command>
                    <CommandInput
                        onValueChange={searchQuery}
                        placeholder="Type to search..." />
                    <CommandList>
                        {
                            todos.length === 0 ?
                                (
                                    <CommandEmpty>No Todos found.</CommandEmpty>
                                ) : (
                                    <CommandGroup heading="Result">
                                        {
                                            loading ?
                                                (
                                                    <CommandItem>
                                                        <Skeleton className="w-full" />
                                                    </CommandItem>
                                                ) : (
                                                    todos.map(todo => (
                                                        <CommandItem className="gap-5 rounded-md text-balance justify-between" key={todo._id} value={todo.title}>
                                                            {todo.title}
                                                            <SidebarTodo todo={todo} />
                                                        </CommandItem>
                                                    ))
                                                )
                                        }
                                    </CommandGroup>
                                )
                        }
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    )
}
export default SearchBar
