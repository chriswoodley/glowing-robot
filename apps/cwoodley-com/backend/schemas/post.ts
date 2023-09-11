import dotenv from 'dotenv';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, timestamp, select } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { cloudinaryImage } from '@keystone-6/cloudinary';

dotenv.config();

export const Post = list({
  access: allowAll,
  fields: {
    title: text(),
    publishedAt: timestamp(),
    status: select({
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'draft',
    }),
    author: relationship({ ref: 'User.posts' }),
    image: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
        apiKey: process.env.CLOUDINARY_API_KEY || '',
        apiSecret: process.env.CLOUDINARY_API_SECRET || '',
        folder: process.env.CLOUDINARY_API_FOLDER || '',
      },
    }),
    content: document({
      formatting: true,
      links: true,
      dividers: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
    }),
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      const { status } = resolvedData;

      if (status === 'published') {
        const publishedAt = new Date().toISOString();

        return {
          ...resolvedData,
          publishedAt
        }
      }

      return resolvedData;
    }
  },
});
