import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
