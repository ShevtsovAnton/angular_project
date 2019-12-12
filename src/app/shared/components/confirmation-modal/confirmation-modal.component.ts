import { Component, Output, Input, EventEmitter, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnDestroy {
  message = 'Are you sure, you want to delete the course?';

  @Input() modalMessage: string;
  @Output() confirmAction: EventEmitter<boolean>;

  constructor(private renderer: Renderer2) {
    this.confirmAction = new EventEmitter();
    this.renderer.addClass(document.body, 'modal-open');
   }

  handleClick(event: boolean): void {
      this.confirmAction.emit(event);
      console.log(event);
  }

  handleModalWindowClick(event: Event): void {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
