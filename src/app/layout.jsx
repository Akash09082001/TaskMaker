import Navbar from "@/components/organisms/Navbar"
import { cn } from "@/lib/utils"
import BackgroundSvg from "@/svg/background"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Task Maker",
	description: "Don't remind the task just add it",
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className="dark"
			style={{
				colorScheme: "dark",
			}}
		>
			<body
				className={cn(
					"flex h-screen w-screen flex-col",
					inter.className
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main className="relative mx-auto flex h-navScreen w-full max-w-7xl flex-grow overflow-hidden">
						<BackgroundSvg className="absolute inset-0 bg-cover bg-center bg-repeat opacity-80" />
						<div className="flex h-full w-full backdrop-blur-[2px]">
							{children}
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
