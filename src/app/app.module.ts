import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { Ng2GoogleChartModule } from 'ng2-googlechart';

import {BitDataComponent} from './bitdata.component';
import {AboutComponent} from './about.component';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './Statistics.component';

@NgModule({
  declarations: [
    AppComponent,
	BitDataComponent,
    AboutComponent,
    StatisticsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      routes,
      Ng2GoogleChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
