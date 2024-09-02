import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core'; // Import this for including modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import the Forms modules

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(FormsModule, ReactiveFormsModule) // Include FormsModule and ReactiveFormsModule
  ]
};
