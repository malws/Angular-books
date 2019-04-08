import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(catchError(this.handleError<Book[]>('getBooks', [])))
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(catchError(this.handleError<Book>('getBook')));
  }

  //Editing not available yet
  /* updateBook(book: Book): Observable<any> {
    return this.http.put(this.booksUrl, book, httpOptions).pipe(catchError(this.handleError('updateBook')));
  } */

  addBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(catchError(this.handleError<Book>('addBook')));
  }

  deleteBook (book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;
  
    return this.http.delete<Book>(url, httpOptions).pipe(catchError(this.handleError<Book>('deleteBook'))
    );
  }

  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?title=${term}`).pipe(catchError(this.handleError<Book[]>('searchBooks', []))
    );
  }

  private booksUrl = 'api/books';

  constructor(private http: HttpClient) { }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
