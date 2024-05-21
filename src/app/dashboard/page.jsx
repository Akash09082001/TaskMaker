import { getTodos, removeTodo } from "@/actions/todo"
import EmptyState from "@/components/atoms/EmptyState"
import TodoDialog from "@/components/molecules/TodoDialog"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Trash } from "lucide-react"

const Dashboard = async () => {
	const { todos } = await getTodos()

	if (todos.length === 0) {
		return (
			<div className="flex h-full w-full items-center justify-center">
				<EmptyState />
			</div>
		)
	}

	const handleDelete = id => async () => {
		"use server"
		await removeTodo(id)
	}

	return (
		<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{todos.map(todo => (
				<Card
					key={todo._id}
					className="h-full w-full backdrop-blur-sm"
				>
					<CardHeader className="flex w-full flex-row items-center gap-2">
						<CardTitle className="w-full text-base lg:text-lg">
							{todo.title}
						</CardTitle>
						<TodoDialog initialData={todo} />
						<form action={handleDelete(todo._id)}>
							<Button
								type="submit"
								variant="outline"
							>
								<Trash className="h-4 w-4" />
							</Button>
						</form>
					</CardHeader>
					<CardContent>
						<CardDescription>{todo.description}</CardDescription>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

export default Dashboard
