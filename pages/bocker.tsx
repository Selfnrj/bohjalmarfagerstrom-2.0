import { GetStaticProps } from "next"
import Art from "../components/Art"
import { urlFor } from "../santity";
import { Post, Biography } from "../typings";
import { fetchPosts } from "../utils/fetchPosts"
import { fetchBiography } from "../utils/fetchBiography";
import { motion } from "framer-motion";

type Props = {
  posts: Post[];
  biography: Biography;
}

export default function Bocker({ posts, biography }: Props) {

  return (
    <div className="Container">
      <Art posts={posts} category="Books" className="flex" />
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <img className="mb-4" src={urlFor(biography.bookImage).url()} alt="" />
      </motion.div>
    </div>
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