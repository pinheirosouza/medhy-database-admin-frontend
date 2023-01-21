import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-signs-modal',
  templateUrl: './signs-modal.component.html',
  styleUrls: ['./signs-modal.component.scss']
})
export class SignsModalComponent implements OnInit {

  public form: FormGroup;
  varboolean: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {sign: string}) { }  

  ngOnInit(): void {
    console.log(this.data.sign);
    this.initializeForm();

  }

  public noIncidencyEvent( eve): void {
    console.log(eve);
  }

  public initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data.sign, []),
      description: new FormControl("", []),
      incidence_rate: new FormControl("", []),
      pathognomonic: new FormControl(false, []),
    });
  }

}

