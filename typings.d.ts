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
    }
}

export interface Post extends SantityBody {
    _type: "post";
    title: string;
    mainImage: Image;
}