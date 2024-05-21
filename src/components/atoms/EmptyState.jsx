import { Folder } from "lucide-react"
import { Card } from "../ui/card"

const EmptyState = () => {
	return (
		<Card className="flex w-full max-w-sm flex-col gap-5 p-5 text-center backdrop-blur-sm">
			<Folder className="mx-auto h-10 w-10" />
			<strong className="text-xl">No Todos Added</strong>
			<p className="mt-1 text-sm text-gray-500">
				Get started by creating a New Todo
			</p>
		</Card>
	)
}

export default EmptyState
