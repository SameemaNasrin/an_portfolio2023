import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { WorkComponent } from './Components/work/work.component';
import { CaseStudyComponent } from './Components/case-study/case-study.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'caseStudy', component: CaseStudyComponent },
  { path: 'about', component: AboutComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  // { path: '**', redirectTo: '/home' }, // Redirect to home for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
