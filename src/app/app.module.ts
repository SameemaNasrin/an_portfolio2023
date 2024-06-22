import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { WorkComponent } from './Components/work/work.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigs } from './configs/AppConfigs';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { CaseStudyComponent } from './Components/case-study/case-study.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    WorkComponent,
    CaseStudyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [AppConfigs],
  bootstrap: [AppComponent]
})
export class AppModule { }