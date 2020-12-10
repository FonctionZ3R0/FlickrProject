import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagesearchComponent } from './imagesearch/imagesearch.component';
import { SwitchpageComponent } from './switchpage/switchpage.component';
import { PrintimagesComponent } from './printimages/printimages.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImagesearchComponent,
    SwitchpageComponent,
    PrintimagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
