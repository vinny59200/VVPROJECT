import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-iban',
  templateUrl: './iban.component.html',
  styleUrls: ['./iban.component.css']
})

export class IbanComponent implements OnInit {
  isValid: boolean;
  @Input() ibanValue: string;

  @Output() validation: EventEmitter<boolean> = new EventEmitter();  

  constructor() { }

  ngOnInit() {

    this.validation.emit();
  }

  validateIban(): void {
    this.validation.emit(this.isValid);
  }

}
