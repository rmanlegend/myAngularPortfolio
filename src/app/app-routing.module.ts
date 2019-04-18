import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  './home/home.component';
import { AboutComponent } from  './about/about.component';
import { ContactComponent } from  './contact/contact.component';
import { MappingComponent } from  './mapping/mapping.component';
import { GraphqlbrowserComponent } from './graphqlbrowser/graphqlbrowser.component';
import { GraphqldemoComponent } from './graphqldemo/graphqldemo.component';
import { MernComponent } from './mern/mern.component';
import { MongodbComponent } from './mongodb/mongodb.component';

const routes: Routes = [
  {
    path:  'home',
    component:  HomeComponent
    },
    {
    path:  'about',
    component:  AboutComponent
    },
    {
    path:  'contact',
    component:  ContactComponent
    },
    {
      path:  'mapping',
      component:  MappingComponent
    },
    {
      path:  'graphqlbrowser',
      component:  GraphqlbrowserComponent
    },
    {
      path:  'graphqldemo',
      component:  GraphqldemoComponent
    },
    {
      path:  'mern',
      component:  MernComponent
    },
    {
      path:  'mongodb',
      component:  MongodbComponent
    }                 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
