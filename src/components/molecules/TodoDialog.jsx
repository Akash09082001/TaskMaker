"use client"

import useMediaQuery from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"
import { Edit } from "lucide-react"
import { useState } from "react"
import TodoForm from "../organisms/TodoForm"
import { Button } from "../ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer"

const TodoDialog = ({ className, initialData }) => {
	const [open, setOpen] = useState(false)
	const isDeskTop = useMediaQuery("(min-width: 786px)")

	const close = () => setOpen(false)

	const title = `${initialData ? "Edit" : "Add"} Your Todo`
	const description = initialData
		? "Modify existing tasks easily with our intuitive edit feature."
		: "Quickly add tasks here to stay organized and productive!"
	const button = initialData ? (
		<Button variant="outline">
			<Edit className="h-[1rem] w-[1rem]" />
		</Button>
	) : (
		<Button className="flex w-full flex-1">Add Todo</Button>
	)

	if (isDeskTop) {
		return (
			<Dialog
				open={open}
				onOpenChange={setOpen}
			>
				<DialogTrigger asChild>{button}</DialogTrigger>
				<DialogContent className="max-w-sm">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					<TodoForm
						initialData={initialData}
						closeDialog={close}
					/>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer
			open={open}
			onOpenChange={setOpen}
			className={cn("w-full", className)}
		>
			<DrawerTrigger asChild>{button}</DrawerTrigger>
			<DrawerContent className="max-w-3xl">
				<DrawerHeader>
					<DrawerTitle>{title}</DrawerTitle>
					<DrawerDescription>{description}</DrawerDescription>
				</DrawerHeader>
				<TodoForm
					initialData={initialData}
					closeDialog={close}
				/>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default TodoDialog
