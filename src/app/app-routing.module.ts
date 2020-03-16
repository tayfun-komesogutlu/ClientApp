import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component' ;
import { BlogPostAddEditComponent } from './blog-post-add-edit/blog-post-add-edit.component';
import { FraudmanipulationdetailComponent } from './fraudmanipulationdetail/fraudmanipulationdetail.component';
import { FraudmanipulationComponent } from './fraudmanipulation/fraudmanipulation.component';

const routes: Routes = [
  { path: '', component: FraudmanipulationComponent, pathMatch: 'full'},
  { path: 'blogpost/:id', component: BlogPostComponent},
  { path: 'add', component: BlogPostAddEditComponent},
  { path: 'blogpost/edit/:id', component: BlogPostAddEditComponent},
  { path: 'fraudManipulation/detail/:ImageName', component: FraudmanipulationdetailComponent},
  { path: 'fraudManipulation', component: FraudmanipulationComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
