import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private count = 0;
  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.changeSpinnerStateValue(true);
    this.count += 1;
    return next.handle(req)
      .pipe(
        finalize(() => {
          this.count -= 1;
          if (!this.count) {
            this.spinnerService.changeSpinnerStateValue(false);
          }
        })
      );
  }
}
