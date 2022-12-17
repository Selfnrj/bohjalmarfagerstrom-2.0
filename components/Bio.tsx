import React, { useState } from 'react'
import { urlFor } from "../santity";
import { Biography } from "../typings";
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";
import { PortableText } from "@portabletext/react";


type Props = {
  biography: Biography;
  name: string
  email: string
  message: string
}

function Bio({ biography, name, email, message }: Props) {

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  const exit = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  return (
    <div className="md:flex">
      <motion.div 
        className="flex-1 md:mr-8"
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <Image
          src={urlFor(biography.mainImage).url()}
          priority
          className="mb-4 w-max"
          alt=""
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div 
        className="flex-1"
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <p className="mb-8 text-2xl font-extralight">
          <PortableText value={biography.body} />
        </p>
        <button
          className="rounded py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white cursor-pointer"
          onClick={() => (modalOpen ? close() : open())}
        >
          Kontakta mig
        </button>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && 
            <motion.div
            onClick={() => (modalOpen ? close() : open())}
              className="flex align-middle overflow-y-hidden absolute top-0 left-0 h-full w-full bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}  
                className="bg-white rounded p-8 w-full md:w-1/2 max-w-xl m-auto"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button className=" absolute right-4 top-4" onClick={() => (modalOpen ? close() : open())}>{exit}</button>
                <Form name={name} email={email} message={message} />
                <div className="border border-b-gray-400 mt-8 mb-8" />
                <p>Eller maila mig direkt på: <Link className="underline underline-offset-4 text-sky-600 decoration-sky-600 hover:decoration-blue-400" href={"mailto:" + biography.email}>{biography.email}</Link></p>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Bio