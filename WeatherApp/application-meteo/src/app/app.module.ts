import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoService } from './services/meteo.service';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MeteoService],
  bootstrap: [AppComponent]
})
export class AppModule { }