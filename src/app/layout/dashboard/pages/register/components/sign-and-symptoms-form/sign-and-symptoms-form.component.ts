import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SymptomsModalComponent } from 'src/app/shared/components/symptoms-modal/symptoms-modal.component';
import { SignsModalComponent } from 'src/app/shared/components/signs-modal/signs-modal.component';
import { IllnessService } from 'src/app/shared/services/illness/illness.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-and-symptoms-form',
  templateUrl: './sign-and-symptoms-form.component.html',
  styleUrls: ['./sign-and-symptoms-form.component.scss'],
})
export class SignAndSymptomsFormComponent implements OnInit {
  @Input()
  public form: any;
  public selectedSign: Array<any> = [];
  public selectedSymptoms: Array<any> = [];
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
    private illnessService: IllnessService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.form.value);

  }


  handleFormSubmit() {
    console.log(this.form.value);
    this.illnessService.update({
      _id: localStorage.getItem('illnessId'),
      signs: this.selectedSign,
      symptoms: this.selectedSymptoms
    }).subscribe((res:any) => {
      console.log(res);
      if(!res.success) {
        alert(res.message);
      }
    }
    );
  }

  openSymptomsModal(symptom) {
    this.selectedSymptoms.push(symptom);
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
    this.selectedSign.push(sign);
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

  removeSign(sign) {
    this.selectedSign = this.selectedSign.filter((item) => item.name !== sign.name);
  }

 removeSymptom(symptom) {
    this.selectedSymptoms = this.selectedSymptoms.filter((item) => item.name !== symptom.name);
  }

}
