import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  template: `
    <div>
      <h5>{{ project.title }}</h5>
      <div class="text-muted">
        <p [innerHTML]="project.body"></p>
        <p>
          <a
            *ngIf="project.field_link"
            [href]="project.field_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" class="btn btn-dark">Launch</button>
          </a>
        </p>
      </div>
      <div
        class="thumb"
        [style.backgroundImage]="'url('+ thumb +')'"
      ></div>
    </div>
  `,
})
export class ProjectInfoComponent implements OnInit {
  @Input() project;
  @Input() thumb: string;

  constructor() { }

  ngOnInit(): void { }
}
