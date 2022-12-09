import React, { useState, KeyboardEvent } from 'react'
import { urlFor } from "../santity";
import { Post } from "../typings";
import { motion } from "framer-motion";
import Image from 'next/image'
import { ArrowSmallRightIcon, ArrowSmallLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'


type Props = {
  posts: Post[];
  category: string;
  className: string;
}

function Art({ posts, category, className }: Props) {

  const [imageToShow, setImageToShow] = useState<any>({});
  const [textToShow, setTextToShow] = useState<any>({});
  const [lightboxDisplay, setLightBoxDisplay] = useState<boolean>(false);

  //looping through our images array to create img elements
  const imageCards = posts.filter(item => item.categories?.title === category).map(({mainImage, title, year, _id}) => (
    <motion.div 
      key={_id} 
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
        onClick={() => showImage(urlFor(mainImage).url(), (title + (year === undefined ? "" : " - " + year)))}
        src={urlFor(mainImage).url()}
        className="mb-4 cursor-pointer"
        alt={title}
        priority
        width={600}
        height={600}
      />
      
      <p className="text-center">{title}{year && " - " + year}</p>
    </motion.div>
  ));
  
  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image: any, text: string) => {
    setImageToShow(image);
    setTextToShow(text);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const images = posts.filter(item => item.categories?.title === category).map(({ mainImage }) => urlFor(mainImage).url());
  const titles = posts.filter(item => item.categories?.title === category).map(({ title, year }) => title + (year === undefined ? "" : " - " + year));
  //console.log(titles);
  
  //show next image in lightbox
  const showNext = (e: any) => {
    e.stopPropagation();
    
    let currentIndex = images.indexOf(imageToShow);
    let currentTitle = titles.indexOf(textToShow);

    //console.log(currentIndex);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
      setTextToShow(titles[currentTitle + 1]);
      //console.log(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e: any) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    let currentTitle = titles.indexOf(textToShow);

    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setTextToShow(titles[currentTitle - 1]);
      setImageToShow(nextImage);
    }
  };

  return (
    <div className={className}>
      {imageCards}
      {
        lightboxDisplay ? 
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
            priority
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
       : ""
      }
    </div>
  )
}

export default Art