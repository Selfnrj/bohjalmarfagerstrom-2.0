import { GetStaticProps } from "next"
import Image from 'next/image'
import Art from "../components/Art"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion";
import { urlFor } from "../santity";
import { Post, Biography } from "../typings";
import { fetchPosts } from "../utils/fetchPosts"
import { fetchBiography } from "../utils/fetchBiography";

type Props = {
  posts: Post[];
  biography: Biography;
}

export default function Bocker({ posts, biography }: Props) {

  return (
    <>
      <Navbar name={biography.title} />
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
        <Image 
          className="mb-4" 
          src={urlFor(biography.bookImage).url()}
          alt=""
          priority
          width={1200}
          height={600}
        />
      </motion.div>
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