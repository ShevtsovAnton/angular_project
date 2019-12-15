import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public show = false;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.spinnerObservable
      .pipe(takeUntil(this.destroy$))
      .subscribe(isShow => this.show = isShow);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
