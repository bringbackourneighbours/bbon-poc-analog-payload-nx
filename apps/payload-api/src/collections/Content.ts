import {Block, CollectionConfig} from "payload/types";

export const Content: CollectionConfig = {
  slug: 'contents', // required
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'text',
      type: 'richText',
    },
  ],
  admin:{
    useAsTitle: 'title',
  }
}

export default Content
