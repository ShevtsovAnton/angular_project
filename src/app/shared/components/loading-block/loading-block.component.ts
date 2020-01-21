import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent implements OnInit {
  public show$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.show$ = this.spinnerService.spinnerObservable;
  }
}
