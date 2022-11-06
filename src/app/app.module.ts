import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlePipe } from './pipes/title.pipe';
import { NavComponent } from './components/nav/nav.component';

import { DatabaseComponent } from './components/database/database.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormUserComponent } from './components/form-user/form-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TitlePipe,
    NavComponent,
    DatabaseComponent,
    UserDetailComponent,
    FormUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
