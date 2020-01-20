import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthorModel } from '../models/author.model';


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors: AuthorModel[];

  constructor(
    private http: HttpClient
  ) {
  }

  getAuthors(): Observable<AuthorModel[]> {
    return this.authors
      ? of(this.authors)
      : this.http.get('http://localhost:3004/authors')
        .pipe(
          tap((res: AuthorModel[]) => this.authors = res)
        );
  }
}
