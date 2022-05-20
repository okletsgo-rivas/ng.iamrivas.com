import { Component, OnInit, Input, ElementRef, Output } from '@angular/core';
import { DrupalService } from 'src/app/drupal.service';

@Component({
  selector: 'app-project',
  template: `
    <app-project-info
      [project]="project"
      [thumb]="origin + project.field_image"
      class="col-md-6 text-center d-flex align-items-center info child"
    ></app-project-info>
    <app-project-image
      class="col-md-6 child p-0"
      [path]="origin + project.field_image"
    ></app-project-image>
  `,
})
export class ProjectComponent implements OnInit {
  @Input() project;
  @Input() pageBottom: number = 0;

  y: number;
  origin: string;

  constructor(private drupal: DrupalService, private el: ElementRef) {
    this.origin = drupal.origin;
  }

  ngOnInit(): void {
    this.y = this.el.nativeElement.offsetTop;
  }

  getVisible() {
    return this.y < this.pageBottom;
  }

}
