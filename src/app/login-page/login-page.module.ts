import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent
  }
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
		RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [RouterModule,
	LoginPageComponent]
})
export class LoginPageModule { }
