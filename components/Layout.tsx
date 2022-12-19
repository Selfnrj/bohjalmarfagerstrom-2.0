import Footer from "./Footer"

type Props = {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="bg-gray-100 text-zinc-800 dark:bg-zinc-900 dark:text-white h-screen scrollbar-track-gray-300 dark:scrollbar-track-zinc-700 scrollbar-thumb-zinc-500 dark:scrollbar-thumb-gray-500 scrollbar-thin">
      <div className="Container">
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout
