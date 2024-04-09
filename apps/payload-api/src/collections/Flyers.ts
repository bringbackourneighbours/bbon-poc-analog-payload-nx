import {Block, CollectionConfig} from "payload/types";

const ContentBlock: Block = {
  slug: 'ContentBlock', // required
  interfaceName: 'ContentBlock', // optional
  fields: [
    // required
    {
      name: 'content',
      type: 'relationship',
      relationTo: 'contents',
    },
  ],
}

const Flyers: CollectionConfig = {
  slug: 'flyers',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'contentblocks',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [
        ContentBlock,
      ],
    }

  ],
}

export default Flyers
