import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
	return (
		<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{Array.from({ length: 6 }, (_, i) => i + 1).map(i => (
				<Card
					key={i}
					className="h-fit flex-col backdrop-blur-sm"
				>
					<CardHeader className="flex w-full flex-col items-center gap-2">
						<Skeleton className="h-16 w-full" />
					</CardHeader>
					<CardContent>
						<Skeleton className="h-8 w-full" />
					</CardContent>
				</Card>
			))}
		</div>
	)
}

export default Loading
