import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-image',
  template: `
    <div
      class="col-md-6 full child"
      [style.backgroundImage]="'url(' + path + ')'"
    ></div>
  `,
})
export class ProjectImageComponent implements OnInit {
  @Input() path: string;

  constructor() { }

  ngOnInit(): void {
  }

}
