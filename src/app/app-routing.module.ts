import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {LazyModule} from './lazy.module';

const routes: Routes = [
  //http://localhost::4200/ --> main-page
  { path: '', pathMatch: 'full', redirectTo: 'main-page' },
  //http://localhost::4200/main-page --> main-page
  { path: 'main-page', component: MainPageComponent },
  //http://localhost::4200/posts --> posts
  { path: 'posts', loadChildren: './lazy.module#LazyModule' },
  //http://localhost::4200/*any-wrong-path*
  { path: '**', component:  NotFoundPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
