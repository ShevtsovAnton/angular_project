import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './features/courses/containers/courses-page/courses-page.component';
import { LoginPageComponent } from './features/login/containers/login-page/login-page.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AddEditCoursePageComponent } from './features/add-edit-course/containers/add-edit-course-page/add-edit-course-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  {
    path: 'courses/new',
    component: AddEditCoursePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
    component: AddEditCoursePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'courses', component: CoursesPageComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
