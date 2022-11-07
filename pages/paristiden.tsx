import { GetStaticProps } from "next"
import Art from "../components/Art"
import { Post } from "../typings";
import { fetchPosts } from "../utils/fetchPosts"

type Props = {
  posts: Post[];
}

export default function Paris({ posts }: Props) {
  return <Art posts={posts} category="Paris" className="block" />
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