import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminModule } from  './admin/admin.module';
import { MappingComponent } from './mapping/mapping.component';
import { GraphqlbrowserComponent } from './graphqlbrowser/graphqlbrowser.component';
import { GraphqldemoComponent } from './graphqldemo/graphqldemo.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { MernComponent } from './mern/mern.component';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1pgtYdv9B2alCuf03LDahtn0mjIaOcsQ",
    authDomain: "rmandoportfolio.firebaseapp.com",
    databaseURL: "https://rmandoportfolio.firebaseio.com",
    projectId: "rmandoportfolio",
    storageBucket: "rmandoportfolio.appspot.com",
    messagingSenderId: "419751948717"
  };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, 
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MappingComponent,
    GraphqlbrowserComponent,
    GraphqldemoComponent,
    MongodbComponent,
    MernComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
