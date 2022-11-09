import { urlFor } from "../santity";
import { Post } from "../typings";
import { motion } from "framer-motion";
import Image from 'next/image'

type Props = {
  posts: Post[];
  category: string;
  className: string;
}

function Art({ posts, category, className }: Props) {

  //const [selectedId, setSelectedId] = useState(false)

  return (
    <div className={className}>
      {posts.filter(item => item.categories?.title === category).map((post) => (
        <motion.div 
          key={post._id} 
          className="max-w-xl m-auto mb-10 px-2"
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
            src={urlFor(post.mainImage).url()}
            placeholder='blur'
            blurDataURL={urlFor(post.mainImage).url()}
            className="mb-4"
            alt={post.title}
            priority
            width={600}
            height={600}
          />
          <p className="text-center">{post.title}{post.year && " - " + post.year}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Art