import { Component, OnInit } from '@angular/core';

import { DrupalService } from './drupal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iamrivas';
  projects;

  constructor(private drupal: DrupalService) { }

  ngOnInit(): void {
    this.drupal.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
