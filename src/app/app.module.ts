import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatsSearchComponent } from './cats-search/cats-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CatsSearchService } from './shared/cats-search.service';

@NgModule({
  declarations: [
    AppComponent,
    CatsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		HttpClientModule
  ],
  providers: [CatsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
