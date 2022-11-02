import React from 'react'
import { urlFor } from "../santity";
import { Post } from "../typings";

type Props = {
  posts: Post[];
  category: string;
}

//filter(category => category.categories === "Arboretum")

function Art({ posts, category }: Props) {
  return (
    <div>
      {posts.filter(item => item.categories?.title === category).map((post) => (
        <div key={post._id} className=" max-w-screen-sm m-auto mb-10">
            <img className="mb-4" src={urlFor(post.mainImage).url()} alt="" />
            <p className="text-center">{post.title} - {post.year}</p>
        </div>
      ))}
    </div>
  )
}

export default Art