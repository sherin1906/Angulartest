import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditdetailsComponent } from '../addeditdetails/addeditdetails.component';

@Component({
  selector: 'app-businessdetails',
  templateUrl: './businessdetails.component.html',
  styleUrls: ['./businessdetails.component.scss']
})
export class BusinessdetailsComponent {
  constructor(public dialog: MatDialog) { }
  openAddEdit() {
    const dialogRef = this.dialog.open(AddeditdetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
