import TodoDialog from "@/components/molecules/TodoDialog"

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex h-full w-full flex-col gap-4 overflow-hidden p-6">
			<div className="flex-1 overflow-y-auto overflow-x-hidden px-2 scrollbar">
				{children}
			</div>
			<div className="flex w-full backdrop-blur-md">
				<TodoDialog />
			</div>
		</div>
	)
}

export default DashboardLayout
