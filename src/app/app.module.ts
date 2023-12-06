import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service'; // Import your DataService

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule], // Add HttpClientModule to the imports array
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataService, // Add your DataService to the providers array
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
