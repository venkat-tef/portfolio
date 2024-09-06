import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjctsComponent } from './projcts/projcts.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'portfolio/resume', component: ResumeComponent },
  { path: 'portfolio/projects', component: ProjctsComponent },
  { path: 'portfolio/contact', component: ContactComponent },
  { path: 'portfolio/skills', component: SkillsComponent }
];
