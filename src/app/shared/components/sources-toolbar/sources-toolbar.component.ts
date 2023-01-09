import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewSourceModalComponent } from '../new-source-modal/new-source-modal.component';

@Component({
  selector: 'app-sources-toolbar',
  templateUrl: './sources-toolbar.component.html',
  styleUrls: ['./sources-toolbar.component.scss']
})
export class SourcesToolbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
    //load list from backend
  }

  newSourceModal(){
    const dialogRef = this.dialog.open(NewSourceModalComponent, {width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    }
    );
  }


}
