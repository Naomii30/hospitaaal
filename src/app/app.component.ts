import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario = {
    email:'',
    password:''
   }
 
   Ingresar(){
     console.log(this.usuario);
    }
   title = 'hospitaal';
 }
