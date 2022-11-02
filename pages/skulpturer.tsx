import { GetStaticProps } from "next"
import Art from "../components/Art"
import { Post } from "../typings";
import { fetchPosts } from "../utils/fetchPosts"

type Props = {
  posts: Post[];
}

export default function Skulpturer({ posts }: Props) {
  return (
    <div>
      <Art posts={posts} category="Skulpturer" />
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