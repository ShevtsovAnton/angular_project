import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours.pipe';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    ConfirmationModalComponent,
    MinutesToHoursPipe,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    LogoComponent,
    FooterComponent,
    ConfirmationModalComponent,
    MinutesToHoursPipe,
    FormsModule,
    CommonModule,
    PageNotFoundComponent,
    RouterModule
  ]
})
export class SharedModule { }
