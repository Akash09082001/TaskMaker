import Link from "next/link"
import Logo from "../atoms/Logo"
import { ThemeSwitcherBtn } from "../atoms/ThemeSwitcherBtn"

const Navbar = () => {
	return (
		<div className="flex w-full border-b border-border backdrop-blur-md">
			<div className="mx-auto flex w-full max-w-7xl px-5 py-3">
				<div className="grid w-full grid-cols-2">
					<div className="flex w-full items-center justify-start">
						<Link href="/">
							<Logo />
						</Link>
					</div>
					<div className="flex w-full items-center justify-end gap-5">
						<ThemeSwitcherBtn />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
