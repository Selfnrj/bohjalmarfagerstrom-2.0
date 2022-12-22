import { ArrowSmallLeftIcon, ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { urlFor } from "../santity"
import { motion } from "framer-motion";
import { Post } from "../typings";

type Props = {
  posts: Post[];
  category: string;
  hideLightBox: any;
  showNext: any;
  showPrev: any;
  imageToShow: any;
  textToShow: any;
}

function Lightbox({ hideLightBox, showNext, showPrev, imageToShow, textToShow }: Props) {
  
  return (        
    <motion.div 
      className="flex justify-between items-center overflow-y-hidden fixed inset-0 bg-black/90 p-4"
      onClick={hideLightBox}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <button className="absolute right-4 top-4 z-10" onClick={hideLightBox}>
        <XMarkIcon className="h-6 w-6 text-white"/>
      </button>
      <button className="bg-black text-white p-4 text-xl absolute left-0 z-10" onClick={showPrev}>
        <ArrowSmallLeftIcon className="h-6 w-6 text-white"/>
      </button>
      <Image 
        alt="image" 
        className="p-14"
        fill
        style={{
          objectFit: 'contain',
        }}
        src={urlFor(imageToShow).url()}
      />
      <p className="absolute right-0 left-0 text-center bottom-0 p-4 text-white z-10">
        {textToShow}
      </p>
      <button className="bg-black text-white p-4 text-xl absolute right-0 z-10" onClick={showNext}>
        <ArrowSmallRightIcon className="h-6 w-6 text-white"/>
      </button>
    </motion.div>
  )
}

export default Lightbox