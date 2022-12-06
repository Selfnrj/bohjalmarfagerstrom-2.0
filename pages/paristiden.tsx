import { GetStaticProps } from "next"
import Art from "../components/Art"
import Navbar from "../components/Navbar"
import { Post, Biography } from "../typings";
import { fetchBiography } from "../utils/fetchBiography";
import { fetchPosts } from "../utils/fetchPosts"

type Props = {
  posts: Post[];
  biography: Biography;
}

export default function Paris({ posts, biography }: Props) {
  return (
    <>
      <Navbar name={biography.title} />  
      <Art posts={posts} category="Paris" className="block" />
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

		//revalidate: 60,
	}
}