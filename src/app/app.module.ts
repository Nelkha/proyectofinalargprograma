import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SupBarComponent } from './components/sup-bar/sup-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
