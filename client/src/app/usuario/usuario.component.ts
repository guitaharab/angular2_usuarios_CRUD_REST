import { Component, Input } from "@angular/core";

@Component({
    moduleId:module.id,
    selector: 'usuario',
    templateUrl : './usuario_component.html'
})
export class UsuarioComponent {
    @Input() nome: String;
    @Input() idade: Number;
    @Input() cargo: String;
            _id: String;
}