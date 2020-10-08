import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPostsPageComponent } from './lazy-posts-page/lazy-posts-page.component';
import { LazyPostComponent } from './lazy-post/lazy-post.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path:'lazy-posts', component: LazyPostsPageComponent }
]

@NgModule({
  declarations: [
    LazyPostsPageComponent,
    LazyPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class LazyModule { }
