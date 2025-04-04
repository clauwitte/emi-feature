import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private readonly http: HttpClient) { }

  calculate(loanValue: number, yearlyInterestRate: number, loanTerm: number): Observable<number> {
    return this.http.post<number>(
      "http://localhost:8080/api/calculate",
      {
          loanValue: loanValue,
          yearlyInterestRate: yearlyInterestRate,
          loanTerm: loanTerm
      }
    )
  }
}
