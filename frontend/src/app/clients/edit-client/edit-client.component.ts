import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { ISnackbarManagerService } from '../../services/isnackbar-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientModelForm } from '../client.models';
import { ClientFormComponent } from '../components/client-form/client-form.component';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService }
  ],
  imports: [ClientFormComponent]
})
export class EditClientComponent implements OnInit, OnDestroy {

  client: ClientModelForm = { id: 0, name: '', email: '', phone: '' };
  private httpsubscriptions: Subscription[] = [];

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackBarManager: ISnackbarManagerService,
    private readonly activatedRouter: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (!id) {
      this.snackBarManager.show('Erro ao recuperar informações do cliente');
      this.router.navigate(['clients/list']);
      return;
    }
  
    this.httpsubscriptions?.push(
      this.httpService.findById(Number(id)).subscribe({
        next: (data) => {
          this.client = data;
        },
        error: () => {
          this.snackBarManager.show('Cliente não encontrado!');
          this.router.navigate(['clients/list']);
        }
      })
    );
  }
  



  ngOnDestroy(): void {
    this.httpsubscriptions.forEach(s => s.unsubscribe());
  }

  onSubmitClient(value: ClientModelForm){
    const {id, ...request} = value
    if(id){
      this.httpsubscriptions?.push (this.httpService.update(id, request).subscribe(_ => {
        this.snackBarManager.show('Usuario atualizado com sucesso'),
        this.router.navigate(['clients/list'])

      }))
      return
    }
    this.snackBarManager.show('Um Erro Inesperado aconteceu'),
    this.router.navigate(['clientes/list'])
  }

}
