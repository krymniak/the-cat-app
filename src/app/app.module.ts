import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatsSearchComponent } from './cats-search/cats-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CatsSearchService } from './shared/cats-search.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CatsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,
		MatSelectModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule
  ],
  providers: [CatsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
