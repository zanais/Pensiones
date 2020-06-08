import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector:'consultap',
    templateUrl: './consultap.component.html',
    styleUrls: ['./consultap.component.css']
})

export class ConsultapComponent implements OnInit{
    letras:String[];

    constructor(private router: Router) {}
    ngOnInit(){
        this.letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }

    
    
}
