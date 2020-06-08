import { Component, OnInit } from '@angular/core';
import { DocumentoService} from './../services/documento.service';
import { Documento } from './../models/documento';

@Component({
    selector: 'tramitar3',
    templateUrl: './tramitar3.component.html',
    styleUrls: ['./tramitar3.component.css']
})

export class Tramitar3Component implements OnInit{
    documento={} as Documento;
    constructor(public documentoService: DocumentoService){

    }
    ngOnInit(){

    }
    addDocumento(){
        if(this.documento.archivo1 !=='' && this.documento.archivo2 !=='' && this.documento.archivo3 !== ''){
            this.documentoService.addDocumento(this.documento);
            this.documento={} as Documento;
        }
    }
}