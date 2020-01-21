import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours.pipe';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    ConfirmationModalComponent,
    LoadingBlockComponent,
    PageNotFoundComponent,
    MinutesToHoursPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    ConfirmationModalComponent,
    LoadingBlockComponent,
    PageNotFoundComponent,
    MinutesToHoursPipe,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
