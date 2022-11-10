import { GetStaticProps } from "next"
import Art from "../components/Art"
import Navbar from "../components/Navbar"
import { Post, Biography } from "../typings";
import { fetchPosts } from "../utils/fetchPosts"
import { fetchBiography } from "../utils/fetchBiography";

type Props = {
  posts: Post[];
  biography: Biography;
}

export default function Abstrait({ posts, biography }: Props) {
  return (
    <>
      <Navbar name={biography.title} />
      <Art posts={posts} category="Abstrait" className="block" />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts: Post[] = await fetchPosts();
  const biography: Biography = await fetchBiography();

	return {
		props: {
			posts,
      biography,
		},

		revalidate: 10,
	}
}