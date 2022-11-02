import React, { ReactComponentElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  name: string
}

export default function Header({ name }: Props) {
  const navlinks = [
    {title: 'Biografi', path: '/'},
    {title: 'Återblick', path: '/aterblick'},
    {title: 'Arboretum', path: '/arboretum'},
    {title: 'Skulpturer', path: '/skulpturer'},
  ]

  const router = useRouter();

  return (
    <header className="py-10 mb-10 font-semibold max-w-screen-lg m-auto">
      <h1 className="text-8xl font-thin text-center mb-12">{name}</h1>
      <nav className="border-t">
        <ul className="flex justify-center">
          {navlinks.map((link) => (
            <li className="flex">
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