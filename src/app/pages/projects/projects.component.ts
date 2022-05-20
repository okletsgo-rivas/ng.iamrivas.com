import { Component, OnInit } from '@angular/core';
import { DrupalService } from 'src/app/drupal.service';

@Component({
  selector: 'app-projects',
  template: `
    <div class="projects container">
      <app-project-filters></app-project-filters>
      <app-project
        *ngFor="let project of projects; let i = index"
        [project]="project"
        [index]="i"
      ></app-project>
    </div>
  `,
})
export class ProjectsComponent implements OnInit {
  projects = [];
  origin: string;

  constructor(private drupal: DrupalService) { }

  ngOnInit(): void {
    this.drupal.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
