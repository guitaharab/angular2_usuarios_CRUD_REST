import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routes'
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }