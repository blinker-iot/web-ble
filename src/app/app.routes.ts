import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'connect', pathMatch: 'full' },
    { path: 'connect', loadComponent: () => import('./pages/connect/connect.component').then(m => m.ConnectComponent) },
    { path: 'joystick', loadComponent: () => import('./pages/joystick-page/joystick-page.component').then(m => m.JoystickPageComponent) },
    { path: 'smarthome', loadComponent: () => import('./pages/smarthome-page/smarthome-page.component').then(m => m.SmarthomePageComponent) },
    { path: 'farming', loadComponent: () => import('./pages/farming-page/farming-page.component').then(m => m.FarmingPageComponent) },
];
