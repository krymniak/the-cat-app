import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatsSearchComponent } from './cats-search.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { CatCardModule } from '../cat-card/cat-card.module';

const routes: Routes = [
  {
    path: '',
    component: CatsSearchComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    CatsSearchComponent
  ],
  imports: [
    CommonModule,
		CatCardModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		RouterModule.forChild(routes)
  ],
  exports: [CatsSearchComponent,
		RouterModule]
})
export class CatsSearchModule { }