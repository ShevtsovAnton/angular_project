import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  template: 'Breadcrumbs mock component',
})
export class BreadcrumbsMockComponent {
  @Input() courseTitle = '';
}
