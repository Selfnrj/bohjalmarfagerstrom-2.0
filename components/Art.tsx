import React, { useState } from 'react'
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

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = posts.filter(item => item.categories?.title === category).map((post) => (
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
        onClick={() => showImage(urlFor(post.mainImage).url())}
        src={urlFor(post.mainImage).url()}
        placeholder='blur'
        blurDataURL={urlFor(post.mainImage).url()}
        className="mb-4 cursor-pointer"
        alt={post.title}
        priority
        width={600}
        height={600}
      />
      
      <p className="text-center">{post.title}{post.year && " - " + post.year}</p>
    </motion.div>
  ));

  const exit = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image: any) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const imageUrl = posts.filter(item => item.categories?.title === category).map(item => item.mainImage);

  //show next image in lightbox
  const showNext = (e: any) => {
    e.stopPropagation();
    console.log(imageToShow);
    
    let currentIndex = posts.filter(item => item.categories?.title === category).map(item => item.mainImage).indexOf(imageToShow);

    console.log(currentIndex);
    if (currentIndex >= imageUrl.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = imageUrl[currentIndex + 1];
      setImageToShow(nextImage);
      console.log(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e: any) => {
    e.stopPropagation();
    let currentIndex = imageUrl.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = imageUrl[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div className={className}>
      {imageCards}
      {
        lightboxDisplay ? 
        <div className="flex justify-between items-center overflow-y-hidden fixed inset-0 bg-black/40" onClick={hideLightBox}>
          <button className="absolute right-4 top-4" onClick={hideLightBox}>{exit}</button>
          <button className="bg-black text-white p-4 text-xl" onClick={showPrev}>⭠</button>
          <Image alt="image" className="w-auto h-auto" width={900} height={900} src={urlFor(imageToShow).url()} />
          <button className="bg-black text-white p-4 text-xl" onClick={showNext}>⭢</button>
        </div>
       : ""
      }
    </div>
  )
}

export default Art