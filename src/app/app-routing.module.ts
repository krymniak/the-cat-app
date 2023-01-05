import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./cats-search/cats-search.module').then(m => m.CatsSearchModule)
  },
  {
    path: 'login', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
