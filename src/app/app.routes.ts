import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    {path: 'app', component: AppComponent, data: { title: 'Home' } }
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
}
