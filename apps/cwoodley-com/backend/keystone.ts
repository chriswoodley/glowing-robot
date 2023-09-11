import dotenv from 'dotenv';
import { config } from '@keystone-6/core';
import { withAuth, session } from './auth';
import { User } from './schemas/user'
import { Post } from './schemas/post'
import { DatabaseConfig, ServerConfig } from '@keystone-6/core/types';

dotenv.config();

const lists = {
  User,
  Post,
};

const ui = {
  isAccessAllowed: (context) => !!context.session?.data,
};

const db: DatabaseConfig<any> = {
  provider: 'postgresql',
  url: process.env.DB_URL || '',
  onConnect: async context => { /* ... */ },
};

const frontEndUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

const server: ServerConfig<any> = {
  cors: { 
    origin: [
      frontEndUrl,
    ], 
    credentials: true 
  },
  port: 8080,
  maxFileSize: 200 * 1024 * 1024,
};

export default config(
  withAuth({
    server,
    db,
    lists,
    session,
    ui,
  })
);