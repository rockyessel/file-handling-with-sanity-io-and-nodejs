import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'doc',
  title: 'Doc',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
  ],
})
