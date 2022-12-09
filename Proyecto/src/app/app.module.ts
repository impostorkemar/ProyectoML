import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//httpClientModule
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearConsultaComponent } from './componentes/crear-consulta/crear-consulta.component';

@NgModule({
  declarations: [
    AppComponent,    
    CrearConsultaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
