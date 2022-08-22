import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SupBarComponent } from './components/sup-bar/sup-bar.component';
import { ProfilebarComponent } from './components/profilebar/profilebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupBarComponent,
    ProfilebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
