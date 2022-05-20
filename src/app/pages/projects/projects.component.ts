import { Component, HostListener, OnInit } from '@angular/core';
import { DrupalService } from 'src/app/drupal.service';

@Component({
  selector: 'app-projects',
  template: `
    <div class="projects container">
      <app-project-filters
        class="row filters mb-4"
      ></app-project-filters>
      <app-project
        *ngFor="let project of getProjects(); let i = index"
        [project]="project"
        class="row project"
        [pageBottom]="getBottom()"
        [class.flex-row-reverse]="i % 2"
      ></app-project>
    </div>
  `,
})
export class ProjectsComponent implements OnInit {
  origin: string;
  pageBottom: number;

  constructor(private drupal: DrupalService) { }

  ngOnInit(): void {
    this.scroll(null);
  }

  @HostListener('window:resize', ['$event'])
  resize(event): void {
    this.scroll(event);
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event): void {
    this.pageBottom = window.scrollY + window.innerHeight - 100;
  }

  getBottom = () => this.pageBottom;
  getProjects = () => this.drupal.getProjects();
}
