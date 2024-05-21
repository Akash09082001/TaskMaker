import Logo from "@/components/atoms/Logo"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex h-fit w-full max-w-7xl flex-col gap-5 px-5">
				<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
					<div className="flex w-full flex-col gap-10">
						<Logo />
						<div className="flex w-fit flex-col gap-5">
							<h1 className="text-xl font-bold md:text-3xl">
								Your Ultimate Todo Companion
							</h1>
							<span className="text-lg font-semibold text-yellow-500">
								Streamline Your Productivity with Ease
							</span>
							<p>
								TaskMaster simplifies task management with
								intuitive features and seamless collaboration,
								helping you stay organized and focused. Say
								goodbye to overwhelm and hello to productivity.
							</p>
							<div className="flex w-full gap-5">
								<Button
									asChild
									className="w-full max-w-36 px-10"
								>
									<Link href="/dashboard">
										Go To Dashboard
									</Link>
								</Button>
							</div>
						</div>
					</div>
					<div className="flex w-full">
						<div className="flex w-full justify-end">
							<Image
								src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTU3NzczMDh8&ixlib=rb-4.0.3&q=85"
								alt="My Image"
								width={800}
								height={300}
								className="rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
