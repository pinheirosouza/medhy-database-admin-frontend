import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SymptomsModalComponent } from 'src/app/shared/components/symptoms-modal/symptoms-modal.component';
import { SignsModalComponent } from 'src/app/shared/components/signs-modal/signs-modal.component';

@Component({
  selector: 'app-sign-and-symptoms-form',
  templateUrl: './sign-and-symptoms-form.component.html',
  styleUrls: ['./sign-and-symptoms-form.component.scss'],
})
export class SignAndSymptomsFormComponent implements OnInit {
  @Input()
  public form: any;
  public symptomsList: Array<any> = [
    {
      name: 'Fever',
    },
    {
      name: 'Cough',
    },
  ];
  public signsList: Array<any> = [
    {
      name: 'Fever',
    },
    {
      name: 'Cough',
    },
  ];
  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    console.log(this.form.value);

  }


  handleFormSubmit() {
    console.log(this.form.value);
  }

  openSymptomsModal(symptom) {
    const dialogRef = this.dialog.open(SymptomsModalComponent, {
      width: '500px',
      data: {
        symptom : symptom,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openSignsModal(sign) {
    const dialogRef = this.dialog.open(SignsModalComponent, {
      width: '500px',
      data: {
        sign : sign,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
