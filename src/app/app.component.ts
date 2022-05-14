import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';

import { DrupalService } from './drupal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iamrivas';
  isTop = true;
  projects;

  constructor(private drupal: DrupalService) { }

  ngOnInit(): void {
    this.drupal.getProjects().subscribe(data => {
      this.projects = data;
      console.log(this.projects[0])
    });
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event): void {
    const newIsTop: boolean = window.scrollY < 100;
    if (newIsTop !== this.isTop) {
      this.isTop = newIsTop;
    }
  }
}
