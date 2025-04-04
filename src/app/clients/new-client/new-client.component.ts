import { Component, Inject, OnDestroy } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { ClientModelForm } from '../client.models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ISnackbarManagerService } from '../../services/isnackbar-manager.service';

@Component({
  standalone: true,
  selector: 'app-new-client',
  imports: [ClientFormComponent],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss',
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: ClientsService }
  ],

})
export class NewClientComponent implements OnDestroy{

  private httpSubscription?: Subscription

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackbarManager: ISnackbarManagerService,
    private readonly router: Router
  ){}

  ngOnDestroy(): void {
    if(this.httpSubscription){
      this.httpSubscription.unsubscribe()
    }
  }

  onSubmitClient(value: ClientModelForm){
    const {id, ...request} = value
    this.httpService.save(request).subscribe(_ => {
      this.snackbarManager.show('@usuario cadastrado com sucesso'),
      this.router.navigate(['clients/list'])
    })
  }


}
