import { Component, OnInit } from '@angular/core';
import { DrupalService } from 'src/app/drupal.service';

@Component({
  selector: 'app-project-filters',
  template: `
    <div
      aria-label="Filter Group"
      role="group"
      class="w-100 btn-group btn-group-toggle"
    >
      <button
        *ngFor="let filter of filters"
        class="btn"
        [class]="'btn-'+ (filter == activeFilter ? 'primary' : 'secondary')"
        (click)="setFilter(filter)"
      >
        {{ filter.title }}
        <span class="ml-2 badge badge-light">
          {{ getCount(filter) }}
        </span>
      </button>
    </div>
  `,
})
export class ProjectFiltersComponent implements OnInit {
  filters: any[] = [
    { title: 'ALL', id: 'all', value: -1 },
    { title: 'Programming', id: 'programming', value: 127 },
    { title: 'E-learning', id: 'elearning', value: 129 },
    { title: 'Design', id: 'design', value: 126 },
    // { title: "Video", id: "video", value: 128 },
  ];

  activeFilter: any;

  constructor(private drupal: DrupalService) { }

  ngOnInit(): void {
    this.setFilter(this.filters[0]);
  }

  setFilter(filter): void {
    this.activeFilter = filter;
    this.drupal.setFilteredProjects(filter.value);
  }

  getCount(filter): number {
    return this.drupal.getFilteredProjectsCount(filter.value)
  }
}
