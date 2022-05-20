import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { ProjectFiltersComponent } from './pages/projects/project-filters/project-filters.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BioComponent } from './pages/bio/bio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectInfoComponent } from './pages/projects/project-info/project-info.component';
import { ProjectImageComponent } from './pages/projects/project-image/project-image.component';
import { ProjectComponent } from './pages/projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectFiltersComponent,
    ProjectsComponent,
    BioComponent,
    ResumeComponent,
    ProjectInfoComponent,
    ProjectImageComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
