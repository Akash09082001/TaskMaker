import Link from 'next/link'
import Logo from '../atoms/Logo'
import { ThemeSwitcherBtn } from '../atoms/ThemeSwitcherBtn'

const Navbar = () => {
    return (
        <div className='flex w-full backdrop-blur-md border-b'>
            <div className="flex w-full px-5 py-3 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 w-full">
                    <div className="flex w-full justify-start items-center">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="flex w-full justify-end gap-5 items-center">
                        <ThemeSwitcherBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
