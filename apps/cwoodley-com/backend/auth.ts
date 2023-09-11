import dotenv from 'dotenv';
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

dotenv.config();

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'name',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

let sessionSecret = process.env.SESSION_SECRET;
let sessionMaxAge = 60 * 60 * 24 * 1; // 1 day

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});

export { withAuth, session }