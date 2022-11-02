import React from 'react'
import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from 'next/head'

type Props = {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>Bo Hjalmar Fagerström</title>
        <meta name="description" content="Konstgalleri över konstnärens verk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar name="Bo Hjalmar Fagerström" />
      { children }
      <Footer />
    </div>
  )
}

export default Layout
