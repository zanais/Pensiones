import { Usuario } from './../models/usuario';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector:'tramitar2',
    templateUrl: './tramitar2.component.html',
    styleUrls: ['./tramitar2.component.css']
})

export class Tramitar2Component implements OnInit{
    usuario={} as Usuario;
    constructor(public usuarioService: UsuarioService){}

    ngOnInit(){
        
    }
    addUsuario(){
        if(this.usuario.name !== '' && this.usuario.apellido !=='' && this.usuario.correo !==''){
        this.usuarioService.addUsuario(this.usuario);
        this.usuario = {} as Usuario;
    }
}

}