import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataViewModule} from "primeng/dataview";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



const routes:Routes = [
  ({path: 'home', component:HomeComponent}),
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'dashboard',component:DashboardComponent},
  ({path: 'login', component:LoginComponent}),

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    DataViewModule,
    InputTextModule,
    RouterModule.forRoot(routes),
    TableModule,
    ButtonModule,
    RippleModule,

  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
