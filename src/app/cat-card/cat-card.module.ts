import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatCardComponent } from './cat-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatCardComponent
  ],
  imports: [
    CommonModule,
		SharedModule
  ],
  exports: [CatCardComponent]
})
export class CatCardModule { }