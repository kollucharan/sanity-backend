import { defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name:'description',
      title:'Description',
      type:'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      title: 'Category',
      name: 'category',
    //   type: 'reference',
    //   to: [{type: 'category'}]
     type: 'array',
  of: [
    {
      type: 'reference',
      to: [{ type: 'category' }]
    }
  ]
    }
  ],
})
