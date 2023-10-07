---
title: Next.js 13 App Directory
image:
  src: https://res.cloudinary.com/dgizsuqu0/image/upload/e_improve:outdoor/q_auto:low/c_scale,w_800/cwoodley/tree-forest-path-fog-road-street-2160-1440_i2b1ty.jpg
  alt: journey
  width: 800
  height: 533
status: published
publishedAt: "2023-10-07T16:22:11.287Z"
author: Chris Woodley
readDuration: 5 minutes
---

Today I learned how to organize and use the Next.js 13 Server and Client components within the new App directory. Below is an example of Next.js project structure:

```javascript
📦frontend
 ┣ 📂app <--- This directory!
 ┃ ┣ 📂blog
 ┃ ┃ ┣ 📂[slug]
 ┃ ┃ ┃ ┣ 📜not-found.js
 ┃ ┃ ┃ ┗ 📜page.js
 ┃ ┃ ┗ 📜page.js
 ┃ ┣ 📜layout.js
 ┃ ┗ 📜page.js
 ┣ 📂components
 ┃ ┣ 📜blog-post-excerpt.js
 ┃ ┣ 📜blog-post.js
 ┃ ┣ 📜blog-posts.js
 ┣ 📂public
 ┃ ┣ 📜favicon.png
 ┃ ┣ 📜favicon.svg
 ┃ ┣ 📜logo.svg
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜jsconfig.json
 ┣ 📜next.config.js
 ┗ 📜package.json
```

### Server Components

Next.js React Server Components (RCS) are rendered on the server and then served to the client. When implementing JavasScript code using any of the browser API's the application will produce an error. Server components must only use the Node.js API. By default, all components that live in the `/app` directory are treated as an RCS.

So, whats good about RCS you might ask. Well, they are good for when you want to perform any operations server-side. For example, you may want to make an API request and render the response on the server and serve it to the client. The HTML sent to the client is used to show a fast non-interactive preview for the initial page load. This has the benefit of improving SEO since the HTML that was rendered can now be used by search engine bots to crawl the content.

After the page has loaded, the RCS Payload is used to reconcile the Client and Server Component trees and update the DOM. This step is called "hydration" and it is what makes the application interactive.

### Client Components

In my case, I used RCS to read from directory of markdown files that are on the server used to generate the blog post you are now reading. The client components I used to make the blog interactive are stored in `frontend/components`. I mentioned that all components in Next.js 13 are treated as RCS. In order to make a client component the only thing you need to do is add `'use client';` at the top of your client component file. That directive will instruct the Next.js 13 framework to treat that component as a client component.

Now, client components may only use the browser's javaScript API. If you try and read a directory in your file system in a client component, the application will error.

So there you have it! Hope this information was insightful to you as it was for me. Stay tuned for more posts like this. Thank you for reading and have a great day.
