import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SupBarComponent } from './components/sup-bar/sup-bar.component';
import { AboutComponent } from './components/about/about.component';
import { LaboralComponent } from './components/laboral/laboral.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupBarComponent,
    AboutComponent,
    LaboralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
