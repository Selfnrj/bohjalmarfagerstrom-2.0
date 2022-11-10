import Footer from "./Footer"

type Props = {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="h-screen scrollbar-track-gray-200 scrollbar-thumb-gray-900 scrollbar-thin">
      <div className="Container">
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout
