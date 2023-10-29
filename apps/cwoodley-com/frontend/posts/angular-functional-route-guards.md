---
title: Angular Functional Route Guards
image:
  src: https://res.cloudinary.com/dgizsuqu0/image/upload/t_improved-low-quality-scale-800px/landscape-mountain-sky-road-street-desert-672754-pxhere.com_dhyhlk.jpg
  alt: journey
  width: 800
  height: 533
status: published
publishedAt: "2023-10-29T13:53:36.834Z"
author: Chris Woodley
readDuration: 5 minutes
---

This week I discovered a new feature that was released with Angular 14. It is called functional route guards. In previous versions of Angular, route guards were implemented using injectable class-based services implemented with an interface like `CanActivate`. I am going to dive in and discuss the differences and how you would implement functional route guards.

### Class-based Route Guard

Here is an example of a route guard implemented as a class-based service.

```typescript
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ) {
    return this.authService.isLoggedIn().pipe(
      tap((value) => {
        if (value) {
          return true
        }

        this.router.navigate(['/login']);
      })
    );
  }
}
```

### Functional Route Guard

In this example, we have converted the class-based route guard to a functional route guard.

```typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return this.authService.isLoggedIn().pipe(
    tap((value) => {
      if (value) {
        return true
      }

      this.router.navigate(['/login']);
    })
  );
};
```

### What's the Difference?

A functional route guard is a function instead of a class and it is no longer an Angular service. Class-based route guard injected other services through the constructor. We now have a new `inject()` function we can import and use in functional route guards in order to use the other services. For example:

```typescript
const router = inject(Router);
const authService = inject(AuthService)
```

Versus...

```typescript
constructor(
  private router: Router, 
  private authService: AuthService
) { }
```

The class-based route guard has a method called `canActivate` and it is based off of the `CanActivate` interface. Functional route guard type is `CanActivateFn`, which has the same signature as the `canActivate` method on the class-based route guard.

```typescript
canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) {
  return this.authService.isLoggedIn().pipe(
    tap((value) => {
      if (value) {
        return true
      }

      this.router.navigate(['/login']);
    })
  );
}
```

versus...

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return this.authService.isLoggedIn().pipe(
    tap((value) => {
      if (value) {
        return true
      }

      this.router.navigate(['/login']);
    })
  );
};
```

### Usage

Whether you are using a functional or class-based route guard, the usage is the same. Both approaches work with standalone components. However, the Angular team has deprecated the class-based guards in favor of using functional route guards. Here is an example of how you use a route guard.

```typescript
import { Routes } from '@angular/router';
import { HomePageComponent } from './blog-posts-page/blog-posts-page.component';
import { RegisterPageComponent } from './blog-post-page/blog-post-page.component';
import { LoginPageComponent } from './create-blog-post-page/create-blog-post-page.component';
import { UserProfilePageComponent } from './account-page/account-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard'; // <-- import it here.

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home Page'
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    title: 'Register Page'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Login Page'
  },
  {
    path: 'user-profile',
    component: UserProfilePageComponent,
    title: 'User Profile'
    canActivate: [authGuard] // <--- Use it here.
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];
```

In comparison, it feels easier to write functional route guards than writing class-based guards. You don’t have to remember to implement an interface. Functional route guards also have a much smaller footprint than class-based guards. They also promote functional programming, for example you may want to partially apply some settings and return a new function serving as your guard using those settings.

In my opinion, functional route guards makes the Angular framework easier to use in combination with standalone components.
