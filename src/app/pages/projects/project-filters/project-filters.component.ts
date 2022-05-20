import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-filters',
  templateUrl: './project-filters.component.html',
  styleUrls: ['./project-filters.component.scss']
})
export class ProjectFiltersComponent implements OnInit {
  filters: any[] = [
    { title: "ALL", id: "all", value: -1 },
    { title: "Programming", id: "programming", value: 127 },
    { title: "E-learning", id: "elearning", value: 129 },
    { title: "Design", id: "design", value: 126 },
    // { title: "Video", id: "video", value: 128 },
  ]

  activeFilter: any;

  constructor() { }

  ngOnInit(): void {
    this.activeFilter = this.filters[0];
  }

}
