import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
	imports: [
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
	],
	exports: [
		MatSelectModule,
		MatFormFieldModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule
	]
})
export class SharedModule { }