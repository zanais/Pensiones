import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Fecha} from '../models/fecha';
import { FechaService } from './../services/fecha.service';

@Component({
    selector:'consultap2',
    templateUrl: './consultap2.component.html',
    styleUrls: ['./consultap2.component.css']
})

export class Consultap2Component implements OnInit{
  letraApellido: String;
  fecha=[];

  constructor(private route: ActivatedRoute, public fechaService:FechaService) {}
  ngOnInit() {
    this.fechaService.getFecha().subscribe(fecha =>{
      this.fecha = fecha;
    });
    this.route.queryParams.subscribe(params => {
      this.letraApellido = params["apellido"]
    }); 
  }

}
