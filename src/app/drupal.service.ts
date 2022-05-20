import { HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrupalService {
  api = '//d9.iamrivas.com/json/projects2';
  origin = '//d9.iamrivas.com';
  projects;

  constructor(private http: HttpClient) { }

  getProjects = (): Observable<any> => this.http.get(this.api);
}
