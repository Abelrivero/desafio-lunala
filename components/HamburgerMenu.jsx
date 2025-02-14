import Link from "next/link"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

export default function HamburgerMenu(){
    const [isOpen, setIsOpen] = useState(false)

    const hamburgerMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="lg:hidden">
            <div onClick={hamburgerMenu} className="flex justify-content-end ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"> 
                    <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                </svg>
            </div>
            <div className={`${isOpen ? '' : 'display-none'}`}>
                <nav className="flex-grid item-center justify-item-center">
                    <ul className="">
                        <li>
                        <Link href="/" className="text-white hover:text-lila font-semibold">
                            Inicio
                        </Link>
                        </li>
                        <li>
                        <Link href="/series" className="text-white hover:text-lila font-semibold">
                            Series
                        </Link>
                        </li>
                        <li>
                        <Link href="/peliculas" className="text-white hover:text-lila font-semibold">
                            Películas
                        </Link>
                        </li>
                        <li>
                        <Link href="/search" className="text-white hover:text-lila font-semibold">
                            Buscar
                        </Link>
                        </li>
                    </ul>
                    <ThemeToggle />
                </nav>
            </div>
        </div>
    )
}