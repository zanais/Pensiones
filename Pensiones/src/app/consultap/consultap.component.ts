import { Component, OnInit } from '@angular/core';

@Component({
    selector:'consultap',
    templateUrl: './consultap.component.html',
    styleUrls: ['./consultap.component.css']
})

export class ConsultapComponent implements OnInit{
    letras:String[];
    ngOnInit(){
        this.letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
}