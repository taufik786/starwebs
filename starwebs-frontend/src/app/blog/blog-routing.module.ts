import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':name', component: BlogPostComponent},
  { path: '**', redirectTo: '/blogs' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
