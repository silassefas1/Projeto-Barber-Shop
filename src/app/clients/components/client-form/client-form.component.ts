import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientModelForm } from '../../client.models';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskDirective


  ],
  templateUrl: './client-form.component.html',
  styleUrls:  ['./client-form.component.scss'] 
})
export class ClientFormComponent {

  @Input() client: ClientModelForm = {id: 0, name: '',email: '', phone: ''}

  @Output() clientSubmitted = new EventEmitter<ClientModelForm>();

  onSubmit(_: NgForm){
    this.clientSubmitted.emit(this.client)
  }
}
