import { GetStaticProps } from "next"
import Art from "../components/Art"
import { urlFor } from "../santity";
import { Post, Biography } from "../typings";
import { fetchPosts } from "../utils/fetchPosts"
import { fetchBiography } from "../utils/fetchBiography";
import { motion } from "framer-motion";
import Image from 'next/image'

type Props = {
  posts: Post[];
  biography: Biography;
}

export default function Arboretum({ posts, biography }: Props) {
  return (
    <div className="Container">
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
          src={urlFor(biography.headerImage).url()} 
          alt=""
          priority
          width={1200}
          height={600}
        />
        <p className="text-center mb-8">{biography.slogan}</p>
      </motion.div>
      <Art posts={posts} category="Återblick" className="block" />
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