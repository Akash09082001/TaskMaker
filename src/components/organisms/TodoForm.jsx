"use client"

import { addTodo, updateTodoById } from "@/actions/todo"
import { cn } from "@/lib/utils"
import { useState } from "react"
import FieldWithLabel from "../molecules/FieldWithLabel"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const initialValues = {
	_id: null,
	title: null,
	description: null,
}

const TodoForm = ({ className, closeDialog, initialData }) => {
	const [todo, setTodo] = useState(initialData ?? initialValues)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleInputChange = e => {
		const { target } = e
		const { value, id } = target
		setTodo(prev => ({
			...prev,
			[id]: value,
		}))
	}

	const handleSubmit = async () => {
		setLoading(true)
		setError(null)
		try {
			const fn = initialData ? updateTodoById : addTodo
			const res = await fn(todo)
			if (res) {
				console.log(
					`Todo ${initialData ? "updated" : "added"} successfully`
				)
				closeDialog()
			} else {
				throw new Error(
					`Failed to ${initialData ? "update" : "add"} todo`
				)
			}
		} catch (error) {
			console.error(
				`Error in ${initialData ? "updating" : "adding"} todo:`,
				error
			)
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form
			action={handleSubmit}
			className={cn("flex flex-col gap-4", className)}
		>
			{loading && <div>Loading...</div>}
			{error && <div className="text-red-500">{error}</div>}
			<div className="grid w-full gap-5">
				<FieldWithLabel
					component={Input}
					label={`${initialData ? "Edit" : "Add"} Title`}
					id="title"
					placeholder={`${
						initialData ? "Update" : "Add"
					} Your Todo Title`}
					value={todo.title}
					onChange={handleInputChange}
				/>
				<FieldWithLabel
					label={`${initialData ? "Edit" : "Add"} Description`}
					id="description"
					placeholder={`${
						initialData ? "Update" : "Add"
					} Your Todo Description...`}
					value={todo.description}
					onChange={handleInputChange}
					rows={5}
					className="resize-none scrollbar"
				/>
			</div>
			<div className="flex w-full">
				<Button
					type="submit"
					className="w-full"
					disabled={loading}
				>
					{initialData
						? loading
							? "Updating..."
							: "Update Todo"
						: loading
							? "Adding..."
							: "Add Todo"}
				</Button>
			</div>
		</form>
	)
}

export default TodoForm
