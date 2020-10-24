import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListAppraisalComponent } from './list-appraisal/list-appraisal.component';
import { NewAppraisalComponent } from './new-appraisal/new-appraisal.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'new-appraisal',
    component: NewAppraisalComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:id/appraisals',
    component: NewAppraisalComponent,
  },
  {
    path: 'list-appraisal',
    component: ListAppraisalComponent,
  },
  {
    path: 'list-appraisal/:id/appraisals',
    component: ListAppraisalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
