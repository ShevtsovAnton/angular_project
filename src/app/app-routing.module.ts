import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './features/courses/containers/courses-page/courses-page.component';
import { LoginPageComponent } from './features/login/containers/login-page/login-page.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AddEditCoursePageComponent } from './features/add-edit-course/containers/add-edit-course-page/add-edit-course-page.component';
import { AuthGuard } from './auth.guard';
import { AppRoutes } from './shared/enums/routes.enum'

const routes: Routes = [
  { path: '', redirectTo: AppRoutes.Courses, pathMatch: 'full' },
  { path: AppRoutes.Login, component: LoginPageComponent, pathMatch: 'full' },
  { path: AppRoutes.Courses, component: CoursesPageComponent, pathMatch: 'full', canActivate: [AuthGuard] },

  {
    path: AppRoutes.Courses_New,
    component: AddEditCoursePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: AppRoutes.Courses_Id,
    component: AddEditCoursePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
