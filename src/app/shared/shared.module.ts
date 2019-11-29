import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    ConfirmationModalComponent,
    MinutesToHoursPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    LogoComponent,
    FooterComponent,
    ConfirmationModalComponent,
    MinutesToHoursPipe,
    FormsModule
  ]
})
export class SharedModule { }
