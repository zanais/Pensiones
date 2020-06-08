import{Injectable} from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Documento} from '../models/documento';
import { Observable} from 'rxjs';
import{ map} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class DocumentoService{
    documento:Observable<Documento[]>;
    documentoCollection:AngularFirestoreCollection<Documento>;
    documentoDoc:AngularFirestoreDocument<Documento>;
    constructor(public db:AngularFirestore){
        this.documentoCollection=this.db.collection('documento');
        this.documento=this.documentoCollection.snapshotChanges().pipe(map(actions =>{
            return actions.map(a =>{
                const data=a.payload.doc.data() as Documento;
                data.id=a.payload.doc.id;
                return data;
            });
        }));
    }
    getDocumento(){
        return this.documento;
    }
    addDocumento(documento:Documento){
        this.documentoCollection.add(documento);
    }
}