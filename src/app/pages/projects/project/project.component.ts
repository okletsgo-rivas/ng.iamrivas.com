import { Component, OnInit, Input } from '@angular/core';
import { DrupalService } from 'src/app/drupal.service';

@Component({
  selector: 'app-project',
  template: `
    <div class="react-reveal row project" [class.flex-row-reverse]="index % 2">
      <app-project-info [project]="project" [thumb]="origin + project.field_image"></app-project-info>
      <app-project-image [path]="origin + project.field_image"></app-project-image>
    </div>
  `,
})
export class ProjectComponent implements OnInit {
  @Input() project;
  @Input() index;

  origin: string;

  constructor(private drupal: DrupalService) {
    this.origin = drupal.origin;
  }

  ngOnInit(): void { }
}
