import Head from 'next/head'
import { useRouter } from 'next/router'
import NavLink from "./NavLink";

type Props = {
  name: string;
}

function Navbar({name}: Props) {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname.split("/").pop() === path;
  };

  const navlinks = [
    {title: 'biografi', path: ''},
    {title: 'återblick', path: 'aterblick'},
    {title: 'paristiden', path: 'paristiden'},
    {title: 'skulpturer', path: 'skulpturer'},
    {title: 'arboretum', path: 'arboretum'},
    {title: "l'Art abstrait", path: 'abstrait'},
    {title: "böcker", path: 'bocker'},
  ]

  return (
    <header className="py-10 font-semibold">
      <Head>
        <title>{name}</title>
        <meta name="description" content="Konstgalleri över konstnärens verk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl md:text-8xl font-thin text-center mb-12">{name}</h1>
      <nav className="grid grid-cols-3 md:grid-cols-7 text-xs md:text-sm gap-4 pb-4 max-w-6xl
      mx-auto border-b">
        {navlinks.map((link) => (
          <NavLink key={link.title} path={link.path} link={link.title} isActive={isActive(link.path)} />
        ))}
      </nav>
    </header>
  )
}

export default Navbar