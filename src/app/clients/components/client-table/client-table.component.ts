import { AfterViewInit, Component, EventEmitter, Inject, Input,OnChanges,OnDestroy,Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClientModelTable } from '../../client.models';
import { Subscription } from 'rxjs';
import { SERVICES_TOKEN } from '../../../services/service.token';
import { DialogManagerService } from '../../../services/dialog-manager.service';
import { IDialogManagerService } from '../../../services/idialog-manager.service';
import { YesNoDialogComponent } from '../../../commons/components/yes-no-dialog/yes-no-dialog.component';
import { CustomPaginator } from './custom-paginator';


@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
  providers: [
    { provide: SERVICES_TOKEN.DIALOG, useClass: DialogManagerService },
    { provide: MatPaginatorIntl, useClass: CustomPaginator }
  ]
})
export class ClientTableComponent implements AfterViewInit, OnChanges, OnDestroy{

  @Input() clients: ClientModelTable[] = []

  dataSource!: MatTableDataSource<ClientModelTable>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions']

  private dialogManagerServiceSubscription?: Subscription

  @Output() onConfirmDelete = new EventEmitter<ClientModelTable>()
  @Output() onRequestUpdate = new EventEmitter<ClientModelTable>()

  constructor(
    @Inject(SERVICES_TOKEN.DIALOG) private readonly dialogManagerService: IDialogManagerService
  ){}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['clients'] && this.clients){
      this.dataSource = new MatTableDataSource<ClientModelTable>(this.clients)
      if(this.paginator){
        this.dataSource.paginator =this.paginator
      }
    }
  }
  ngOnDestroy(): void {
    if(this.dialogManagerServiceSubscription)
      this.dialogManagerServiceSubscription.unsubscribe()
  }

  formatPhone(phone: string){
    return `(${phone.substring(0,2)}) ${phone.substring(2,7)}) - ${phone.substring(7)}`
  }

  delete(client: ClientModelTable){
    this.dialogManagerService.showYesNoDialog(
      YesNoDialogComponent,
      {title: 'Exclusão de Cliente', content: `Confirmar Exclusão do Cliente ${client.name}`}
    )
    .subscribe(result => {
      if (result) {
        this.onConfirmDelete.emit(client)
        const updatedList = this.dataSource.data.filter(c => c.id !== client.id)
        this.dataSource = new MatTableDataSource<ClientModelTable>(updatedList)
      }
    })
  }

  update(client: ClientModelTable){
    this.onRequestUpdate.emit(client)
  }

}
