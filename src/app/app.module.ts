import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {Post4Component} from './post4/post4.component';
import {FormsModule} from '@angular/forms';
import { Post2Component } from './post2/post2.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post4Component,
    Post2Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
