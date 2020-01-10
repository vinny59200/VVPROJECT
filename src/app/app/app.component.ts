import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  iban="FR7630001007941234567890185";
  myIbanValue:string;
  ibanState:boolean;

  setIban(): void{
    this.myIbanValue=this.iban;
  }

  onValidation(isValid:boolean): void {
    this.ibanState=isValid;
  }
}
