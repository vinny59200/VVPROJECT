import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbanComponent } from './iban.component';
import { IbanPipe } from '../@Pipes/iban.pipe';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [IbanComponent, IbanPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[IbanComponent,IbanPipe]
})
export class IbanModule { }
