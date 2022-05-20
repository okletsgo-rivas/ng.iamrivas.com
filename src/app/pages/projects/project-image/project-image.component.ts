import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-image',
  template: `
    <div
      class="w-100 h-100 full"
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
