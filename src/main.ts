import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DhdNavRoutes } from './app/shared/routing.config';

bootstrapApplication(AppComponent, { providers: [provideRouter(DhdNavRoutes), provideAnimations()] });
