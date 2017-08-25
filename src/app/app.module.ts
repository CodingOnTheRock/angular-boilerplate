// Core Modules
import { NgModule } from '@angular/core';

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
    Angular2FontawesomeModule,

    /* Define application modules before AppRoutingModule  */
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
