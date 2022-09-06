import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SupBarComponent } from './components/sup-bar/sup-bar.component';
import { AboutComponent } from './components/about/about.component';
import { LaboralComponent } from './components/laboral/laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HaskComponent } from './components/hask/hask.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupBarComponent,
    AboutComponent,
    LaboralComponent,
    EducacionComponent,
    HaskComponent
    
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
