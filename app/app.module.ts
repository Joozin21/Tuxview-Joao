import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotografiaModule } from './fotografia/fotografia.module';
import { SharedModule } from './shared/header/shared.module';
;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FotografiaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
