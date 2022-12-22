import { useState } from 'react'
import { urlFor } from "../santity";
import { Post } from "../typings";
import Lightbox from "./Lightbox";
import ArtItem from "./ArtItem";

type Props = {
  posts: Post[];
  category: string;
  className: string;
}

function Art({ posts, category, className }: Props) {
  const [imageToShow, setImageToShow] = useState<string>("");
  const [textToShow, setTextToShow] = useState<string>("");
  const [lightboxDisplay, setLightBoxDisplay] = useState<boolean>(false);

  const images = posts.filter(item => item.categories?.title === category).map(({ mainImage }) => 
    urlFor(mainImage).url()
  );

  const titles = posts.filter(item => item.categories?.title === category).map(({ title, year }) => 
    title + (year === undefined ? "" : " - " + year)
  );
  
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

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image: string, text: string) => {
    setImageToShow(image);
    setTextToShow(text);
    setLightBoxDisplay(true);
  };

  return (
    <div className={className}>
      {posts.filter(item => item.categories?.title === category).map((post) => (
        <ArtItem key={post._id} post={post} showImage={showImage} />
      ))} 
      { lightboxDisplay ? 
        <Lightbox 
          posts={posts} 
          category={category} 
          hideLightBox={hideLightBox} 
          showNext={showNext} 
          showPrev={showPrev}
          imageToShow={imageToShow}
          textToShow={textToShow}
        />
      : ""}
    </div>
    
  )
}

export default Art