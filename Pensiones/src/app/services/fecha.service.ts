import {Injectable} from '@angular/core';
import{ AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Fecha} from '../models/fecha';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class FechaService{
    fecha:Observable<Fecha[]>;
    fechaCollection:AngularFirestoreCollection<Fecha>;
    fechaDoc;
    constructor(public db:AngularFirestore){
        this.fecha = this.db.collection('fecha').valueChanges();
            
    }
    getFecha(){
        return this.fecha;
    }
}