import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule] 
})
export class YesNoDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: any 
  ){

  }
}



