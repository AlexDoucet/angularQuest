import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    SignUpComponent,
    ReactiveFormsComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
