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

export default function Arboretum({ posts, biography }: Props) {
  return (
    <>
      <Navbar name={biography.title} />
      <Art posts={posts} category="Arboretum-top" className="md:flex" />
      <Art posts={posts} category="Arboretum" className="block" />
      <Art posts={posts} category="Arboretum-bottom" className="md:flex" />
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

		revalidate: 60,
	}
}