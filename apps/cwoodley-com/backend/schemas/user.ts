import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, password } from '@keystone-6/core/fields';

export const User = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    posts: relationship({ ref: 'Post.author', many: true }),
    password: password({ validation: { isRequired: true } })
  },
});
