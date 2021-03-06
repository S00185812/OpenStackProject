import { Injectable } from '@angular/core';
import { IMonitor } from '../model/monitor'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private dataUri = 'http://localhost:3000/monitors'

  constructor(private http: HttpClient) { }

  createMonitor(monitor: IMonitor): Observable<IMonitor> {

    console.log("create monitor called");

    return this.http.post<IMonitor>(this.dataUri, monitor)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateMonitor(id: string, monitor: IMonitor): Observable<IMonitor> {

    console.log('subscribing to update ' + id);

    let monitorUri: string = this.dataUri + '/' + id
    return this.http.put<IMonitor>(monitorUri, monitor)
      .pipe(
        catchError(this.handleError)
      )
  }



  
  deleteMonitor(id: string): Observable<IMonitor> {

    console.log("delete monitor called");

    let monitorUri: string = this.dataUri + '/' + id
    
    return this.http.delete<IMonitor>(monitorUri)
    .pipe(
      catchError(this.handleError)
    )
    
  }

  getMonitors(): Observable<IMonitor[]>{

    console.log("get monitors called");

    return this.http.get<IMonitor[]>(`${this.dataUri}?limit=10`)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
