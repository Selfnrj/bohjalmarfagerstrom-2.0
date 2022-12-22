interface SantityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
        metadata: any;
    }
}

interface Category {
  title: string;
}

export interface Post extends SantityBody {
    _type: "post";
    title: string;
    year: string;
    mainImage: Image;
    categories: Category;
}

export interface Biography extends SantityBody {
  _type: "biography";
  title: string;
  slogan: string;
  email: string;
  mainImage: Image;
  headerImage: Image;
  bookImage: Image;
  imagesGallery: Image;
  body: Block[];
}