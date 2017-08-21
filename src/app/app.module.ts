// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Extended Modules
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

// Application Modules
import { HomeModule } from './modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';

// Application Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    Angular2FontawesomeModule,

    /* Define application modules before AppRoutingModule  */
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
