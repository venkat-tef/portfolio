import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjctsComponent } from './projcts/projcts.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjctsComponent },
  { path: 'contact', component: ContactComponent }
];
