import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListagemComponent } from './listagem/listem.component';

const appRoutes : Routes = [
    {path: '', component:ListagemComponent, pathMatch:'full' },
    {path: 'usuario', component: UsuarioComponent, pathMatch: 'full'},
    {path: '**', component:ListagemComponent, pathMatch: 'full'}
]

export const routing = RouterModule.forRoot(appRoutes);