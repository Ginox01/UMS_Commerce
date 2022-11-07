import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlePipe } from './pipes/title.pipe';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, TitlePipe, NavComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
