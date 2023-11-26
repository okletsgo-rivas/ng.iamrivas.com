import { HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProject } from './pages/projects/project/IProject';

@Injectable({
  providedIn: 'root'
})
export class DrupalService {
  api = '//d10.iamrivas.com/json/projects2';
  origin = '//d10.iamrivas.com';
  projects: IProject[] = [];
  filteredProjects: IProject[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.api).subscribe((data) => {
      this.projects = data;
      this.setFilteredProjects(-1);
    });
  }

  getProjects = (): IProject[] => this.filteredProjects;
  setFilteredProjects = (idx: number): void => {
    this.filteredProjects = this.getFilteredProjects(idx)
  };
  getFilteredProjects = (idx: number): IProject[] => this.projects.filter(
    (_, i, a) => idx == -1
      ? a.findIndex((t) => t.nid == _.nid) == i
      : _.field_type == idx
  )
  getFilteredProjectsCount = (idx: number): number => this.getFilteredProjects(idx).length;
}
