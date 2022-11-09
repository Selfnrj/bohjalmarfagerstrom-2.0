﻿import React, { ReactComponentElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  name: string
}

export default function Header({ name }: Props) {
  const navlinks = [
    {title: 'Biografi', path: '/'},
    {title: 'Återblick', path: '/aterblick'},
    {title: 'Paristiden', path: '/paristiden'},
    {title: 'Skulpturer', path: '/skulpturer'},
    {title: 'Arboretum', path: '/arboretum'},
    {title: "l'Art abstrait", path: '/abstrait'},
    {title: "Böcker", path: '/bocker'},
  ]

  const router = useRouter();

  return (
    <header className="py-10 font-semibold Container">
      <h1 className="text-4xl md:text-8xl font-thin text-center mb-12 text-red-500">{name}</h1>
      <nav className="border-t">
        <ul className="flex justify-center overflow-x-scroll md:overflow-hidden">
          {navlinks.map((link, index) => (
            <li key={index} className="flex">
              <Link href={link.path} className={router.pathname === link.path ? "navlink active" : "navlink"}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}