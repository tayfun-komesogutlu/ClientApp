import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FraudManipulation } from '../models/fraudManipulation';
import { Observable, observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { FraudManipulationDetail } from '../models/fraudManipulationDetail';

@Injectable({
  providedIn: 'root'
})
export class FraudManipulationService {
  myAppUrl: string;
  myApiUrl: string;
  fData: FormData;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/fraudManipulation/';
  }

  public getFraudDatas(): Observable<FraudManipulation[]> {
    return this.http.get<FraudManipulation[]>('http://10.116.6.102:8080/fraud');
  }

  getFraudDetail(imageName: string): Observable<FraudManipulationDetail[]> {
    this.fData = new FormData();
    this.fData.append('filename', imageName);
    return this.http.post<FraudManipulationDetail[]>('http://10.116.6.102:8080/ela', this.fData)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // get client side error
      errorMessage = error.error.message;
    } else {
      // get server side error
      errorMessage = `Error Code: $(error.status)\nMessage: $(error.Message)`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
