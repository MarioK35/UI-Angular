import { Component } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'UI-Angular';
  edad: number;
  private dumasValores: number = 0;
  private num1: number = 0;
  private num2: number = 0;
  private aux: number = 0;
  

public suma(aux: number, aux2: number): number{
  
  return  aux + aux2;  

}
  

}
