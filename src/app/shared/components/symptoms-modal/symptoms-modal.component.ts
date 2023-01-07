import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-symptoms-modal',
  templateUrl: './symptoms-modal.component.html',
  styleUrls: ['./symptoms-modal.component.scss']
})
export class SymptomsModalComponent implements OnInit {
  public form: FormGroup;
  varboolean: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {symptom: string}) { }  

  ngOnInit(): void {
    console.log(this.data.symptom);
    this.initializeForm();

  }

  public noIncidencyEvent( eve): void {
    console.log(eve);
  }

  public initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data.symptom, []),
      details: new FormControl("", []),
      incidency: new FormControl("", []),
      noIncidency: new FormControl(false, []),
      pathognomonic: new FormControl(false, []),
    });
  }
}
