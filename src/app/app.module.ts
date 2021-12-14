import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { ChartModule } from 'angular-highcharts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BmnComponent } from './pages/bmn/bmn.component';
import { SrcComponent } from './pages/src/src.component';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BmnComponent,
    SrcComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatNativeDateModule,
    MaterialModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
