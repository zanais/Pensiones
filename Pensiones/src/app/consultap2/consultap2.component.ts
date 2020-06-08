import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'consultap2',
    templateUrl: './consultap2.component.html',
    styleUrls: ['./consultap2.component.css']
})

export class Consultap2Component implements OnInit{
  letraApellido: String;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.letraApellido = params["apellido"]
    });
  }

}
