import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from './company';
import {LoginResponse} from './models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://localhost:8000';
  constructor(
    private http: HttpClient,
  ) { }
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }
  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}`);
  }
  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.BASE_URL}/api/companies/`, company);
  }
  deleteCompany(id: number): Observable<Company> {
    return this.http.delete<Company>(`${this.BASE_URL}/api/companies/`);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password,
    });
  }
}
