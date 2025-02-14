"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import HamburgerMenu from "./HamburgerMenu"

export default function Header() {
   return (
    <header className="header">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Memetflix
        </Link>
        <nav className="flex gap-1 sm:hidden aling-item-center">
          <ul className="flex gap-1">
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

        <HamburgerMenu />
      </div>
    </header>
  )
}

