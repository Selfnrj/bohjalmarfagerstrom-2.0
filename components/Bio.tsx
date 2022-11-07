import React from 'react'
import { urlFor } from "../santity";
import { Biography } from "../typings";
import Link from 'next/link'
import { motion } from "framer-motion";

type Props = {
  biography: Biography;
}

function Bio({ biography }: Props) {
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
        <img className="mb-4 w-max" src={urlFor(biography.mainImage).url()} alt="" />
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
          <b>{biography.body.children[0].text}</b>{biography.body.children[0 + 1].text}
        </p>
        <Link className="underline underline-offset-4 text-sky-600 decoration-sky-600 hover:decoration-blue-400" href={"mailto:" + biography.email}>{biography.email}</Link>
      </motion.div>
    </div>
  )
}

export default Bio