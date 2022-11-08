﻿import { GetStaticProps } from "next"
import Art from "../components/Art"
import { Post } from "../typings";
import { fetchPosts } from "../utils/fetchPosts"

type Props = {
  posts: Post[];
}

export default function Arboretum({ posts }: Props) {
  return (
    <div className="Container">
      <Art posts={posts} category="Arboretum-top" className="md:flex" />
      <Art posts={posts} category="Arboretum" className="block" />
      <Art posts={posts} category="Arboretum-bottom" className="md:flex" />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts: Post[] = await fetchPosts();

	return {
		props: {
			posts,
		},

		revalidate: 10,
	}
}