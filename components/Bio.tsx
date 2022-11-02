import React from 'react'
import { urlFor } from "../santity";
import { Biography } from "../typings";
import Link from 'next/link'


type Props = {
  biography: Biography;
}

function Bio({ biography }: Props) {
  return (
    <div className="flex max-w-screen-lg m-auto">
      <div className="flex-1 mr-8">
        <img className="mb-4 w-max" src={urlFor(biography.mainImage).url()} alt="" />
      </div>
      <div className="flex-1">
        <p className="mb-8 text-xl font-light">{biography.body.children.text}</p>
        <Link className="underline decoration-sky-600 hover:decoration-blue-400" href={"mailto:" + biography.email}>{biography.email}</Link>
      </div>
    </div>
  )
}

export default Bio