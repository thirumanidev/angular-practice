import { ModuleWithProviders, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'user', loadChildren: ()=> import('./user/user.module').then( m=> m.UserModule)},
  {path: 'admin', loadChildren: ()=> import('./admin/admin.module').then( m=> m.AdminModule)},
  {path: '', loadChildren: ()=> import('./home/home.module').then( m=> m.HomeModule)},
  // {path: '', component: HomeComponent}

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  relativeLinkResolution: 'legacy' // This is added automatically when update Angular 10 to 11.
});