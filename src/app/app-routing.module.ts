import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren:'./home/home.module#HomeModule'
  }, 
  {
    path: 'lesson', 
    loadChildren: './lesson/lesson.module#LessonModule'
  }, 
  {
    path: '', 
    redirectTo: '', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
