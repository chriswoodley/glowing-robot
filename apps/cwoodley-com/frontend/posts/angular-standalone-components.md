---
title: Angular Standalone Components
image:
  src: https://res.cloudinary.com/dgizsuqu0/image/upload/t_improved-low-quality-scale-800px/landscape-nature-path-pathway-outdoor-wilderness-683875-pxhere.com_is3dhs.jpg
  alt: journey
  width: 800
  height: 532
status: published
publishedAt: "2023-10-15T15:43:41.531Z"
author: Chris Woodley
readDuration: 5 minutes
---

Today I discovered a new feature that was released with Angular 14. It is called Standalone Components. In order to create a component and use it within an Angular application built with a version of Angular prior to Angular 14, it had be registered within an NgModule.

What is an NgModule? It can be described as an encapsulated set of features within an application. It is typically used to handle a feature area of an application. It includes its own components, modules, directives, and pipes. An example of the root App Module importing a feature module is shown below.

### The Customer Dashboard Module

Here is an example of a feature module. Later, we can import this module into the App Module.

```typescript
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomerDashboardComponent
  ],
})
export class CustomerDashboardModule { }
```

### The App Module

In this example, we import the Customer Dashboard Module into the App Module.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomerDashboardModule // <--- Here, we import a feature module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

In Angular versions 14 and above, NgModules are now optional. The focus is shifting away from the module pattern allowing components to be first class. The shift allows greater flexibility in terms of handling component dependencies, better tree-shaking, and portability. It also lowers the barrier of entry for someone learning or in my case re-learning angular.

Angular 14 Standalone Components stand on their own and do not need to be registered to an NgModule. Standalone Components manage their own template dependencies, pipes, and directives. It looks like the code below:

```typescript
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../blog.service'
import { Post } from '../post';
import { BlogPostsComponent } from '../blog-posts/blog-posts.component'
import { BlogPostTagsComponent } from '../blog-post-tags/blog-post-tags.component';

@Component({
  selector: 'app-blog-posts-page',
  standalone: true, // <--- Here, we designate that this component stands alone
  imports: [ // <--- We import our dependencies here
    CommonModule,
    BlogPostsComponent,
    BlogPostTagsComponent
  ],
  templateUrl: './blog-posts-page.component.html',
  styleUrls: ['./blog-posts-page.component.css']
})
export class BlogPostsPageComponent {
  private blogService = inject(BlogService);
  posts: Post[] = [];
  allTags: string[] = [];

  ngOnInit(): void {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.blogService.getPosts()
      .subscribe((data) => {
        this.posts = data?.posts || [];
        this.allTags = [...new Set(this.posts.flatMap((post) => post.tags))]
      })
  }
}
```

### Angular CLI

When creating a new application with the Angular CLI you can opt into using Standalone Components for the entire application. For an existing application where NgModules are used, you can use the Angular CLI to generate new Standalone Components. Both NgModules and Standalone Components can be used side by side. The Angular team is encouraging that we adopt the use of Standalone Components instead of NgModules.

In closing, I think this is a great step forward for Angular. In my opinion, it makes the Angular framework easier to use and a lot more flexible.
