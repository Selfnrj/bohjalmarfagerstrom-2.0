import React from 'react'
import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from 'next/head'

type Props = {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="h-screen scrollbar-track-gray-200 scrollbar-thumb-gray-900 scrollbar-thin">
      <Head>
        <title>Bo Hjalmar Fagerström</title>
        <meta name="description" content="Konstgalleri över konstnärens verk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar name="Bo Hjalmar Fagerström" />
      <div className="Container">
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout
