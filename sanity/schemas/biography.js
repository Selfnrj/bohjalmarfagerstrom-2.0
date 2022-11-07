export default {
  name: 'biography',
  title: 'Biography',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string',
    },
    {
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headerImage',
      title: 'Header image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bookImage',
      title: 'Book image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'email',
      title: 'email',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
