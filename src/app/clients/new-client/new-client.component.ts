import { Component } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token'
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';

@Component({
  selector: 'app-new-client',
  imports: [],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss',
  providers: [
    {provide SERVICES_TOKEN.HTTP.CLIENT, userClass: ClientsService}
  ]
})
export class NewClientComponent {

  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService){

  }
}
