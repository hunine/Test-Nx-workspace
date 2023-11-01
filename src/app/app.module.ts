import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebShellModule } from '@smartfood/shell/feature';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
