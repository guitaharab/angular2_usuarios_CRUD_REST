import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routes'
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListagemComponent } from './listagem/listem.component';



@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    UsuarioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
