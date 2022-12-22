import { motion } from "framer-motion";
import Image from 'next/image'
import { urlFor } from "../santity";
import { Post } from "../typings";

type Props = {
  post: Post;
  showImage: any;
}

function ArtItem({ post, showImage }: Props) {
  return (
    <motion.div 
      key={post._id} 
      className="max-w-xl m-auto mb-10"
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
        onClick={() => showImage(urlFor(post.mainImage).url(), (post.title + (post.year === undefined ? "" : " - " + post.year)))}
        src={urlFor(post.mainImage).url()}
        placeholder="blur"
        blurDataURL={post.mainImage.asset.metadata.lqip}
        className="mb-4 cursor-pointer"
        alt={post.title}
        width={600}
        height={600}
      />
      <p className="text-center">{post.title}{post.year && " - " + post.year}</p>
    </motion.div>
  )
}

export default ArtItem