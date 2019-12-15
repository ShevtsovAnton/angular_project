import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  count = 0;
  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.changeSpinnerStateValue(true);
    this.count++;
    return next.handle(req)
      .pipe(tap(
        event => console.log(event),
        error => console.log(error)
      ), finalize(() => {
        this.count--;
        if (!this.count) {
          this.spinnerService.changeSpinnerStateValue(false);
        }
      })
      );
  }
}
