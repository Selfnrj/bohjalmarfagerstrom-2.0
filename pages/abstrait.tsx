import { GetStaticProps } from "next"
import Art from "../components/Art"
import { Post } from "../typings";
import { fetchPosts } from "../utils/fetchPosts"

type Props = {
  posts: Post[];
}

export default function Abstrait({ posts }: Props) {
  return (
    <div className="Container">
      <Art posts={posts} category="Abstrait" className="block" />
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