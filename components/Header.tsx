import React, { ReactComponentElement } from 'react'
import { urlFor } from "../santity";
import { Post } from "../typings";

type Props = {
    name: string
    slogan: string
    posts: Post[];
}

export default function Header({ name, slogan, posts}: Props) {
  return (
    <div>
        <header className="p-10 mb-10 bg-slate-500 font-semibold">
            <h1 className="text-2xl">{name}</h1>
            <p>{slogan}</p>
        </header>
        {posts.map((post) => (
            <div key={post._id} className="max-w-md m-auto mb-10">
                <img className="mb-4" src={urlFor(post.mainImage).url()} alt="" />
                <p className="text-center">{post.title}</p>
            </div>
        ))}
    </div>
  )
}