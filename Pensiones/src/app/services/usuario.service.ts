import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import{ Usuario} from '../models/usuario';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class UsuarioService{
    usuarioCollection: AngularFirestoreCollection<Usuario>;
    usuario:Observable<Usuario[]>;
    usuarioDoc:AngularFirestoreDocument<Usuario>;
    constructor(public db: AngularFirestore){
        // this.usuario = this.db.collection('usuario').valueChanges();
        this.usuarioCollection = this.db.collection('usuario');
        this.usuario = this.usuarioCollection.snapshotChanges().pipe(map(actions =>{
            return actions.map(a =>{
                const data=a.payload.doc.data() as Usuario;
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    getUsuario(){
        return this.usuario;
    }
    addUsuario(usuario:Usuario){
        this.usuarioCollection.add(usuario);
    }
}