import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CatsSearchService } from './shared/services/cats-search.service';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
		SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		HttpClientModule,
		MatToolbarModule
  ],
  providers: [CatsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
