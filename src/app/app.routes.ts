import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'connect', pathMatch: 'full' },
    { path: 'connect', loadComponent: () => import('./pages/connect/connect.component').then(m => m.ConnectComponent) },
    { path: 'light', loadComponent: () => import('./pages/light-page/light-page.component').then(m => m.LightPageComponent) },
    { path: 'ppt', loadComponent: () => import('./pages/ppt-page/ppt-page.component').then(m => m.PptPageComponent) },
    { path: 'joystick', loadComponent: () => import('./pages/joystick-page/joystick-page.component').then(m => m.JoystickPageComponent) },
    { path: 'iot/:devicename', loadComponent: () => import('./pages/iot-page/iot-page.component').then(m => m.IotPageComponent) },
    // { path: 'smarthome', loadComponent: () => import('./pages/smarthome-page/smarthome-page.component').then(m => m.SmarthomePageComponent) },
    // { path: 'farming', loadComponent: () => import('./pages/farming-page/farming-page.component').then(m => m.FarmingPageComponent) },
    // { path: 'weather', loadComponent: () => import('./pages/weather-page/weather-page.component').then(m => m.WeatherPageComponent) },
];
