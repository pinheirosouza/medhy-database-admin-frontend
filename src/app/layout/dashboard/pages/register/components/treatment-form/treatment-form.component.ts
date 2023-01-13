import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExamModalComponent } from 'src/app/shared/components/exam-modal/exam-modal.component';
import { NewSourceModalComponent } from 'src/app/shared/components/new-source-modal/new-source-modal.component';

@Component({
  selector: 'app-treatment-form',
  templateUrl: './treatment-form.component.html',
  styleUrls: ['./treatment-form.component.scss'],
})
export class TreatmentFormComponent implements OnInit {
  @Input()
  public form: any;
  public medicationsList: Array<any> = [ {
    name: '',
    dose: '',
    frequency: '',
    duration: '',
  } ];
  public dosageOptions: Array<any> = [ '10mg', '50mg', '100mg', '500mg']
  public frequencyOptions: Array<any> = [ 'Once a day', 'Twice a day', 'Thrice a day']
  public durationOptions: Array<any> = [ '1 week', '2 weeks', '3 weeks', '4 weeks']


  public examsList: Array<any> = [
    {
      name: [],
      type:''
    }];

  public examTypes: Array<any> = ["Imagem", "Laboratorial", "Outros"];
  

  constructor(
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    console.log(this.examsList[0].name);
  }

  handleFormSubmit() {
    this.dialog.open(NewSourceModalComponent,
      {
        width: '500px',
      })

      this.dialog.afterAllClosed.subscribe((result) => {
        console.log(result);
        //fazer o patch da fonte na doença, talvez usar outra dialgoRef aqui
      }
      );

  }

  addMedication() {
    console.log('addMedication', this.medicationsList);
    // patch value to the form ver com Topin
    this.medicationsList.push({
      name: '',
      dose: '',
      frequency: '',
      duration: '',
    });
  }

  addExam() {
    console.log('addExam', this.examsList);
    this.examsList.push({
      name: [],
      type:''
    });
  }

  openExamModal(exam) {
// patch value to the form ver com Topin
    const dialogRef = this.dialog.open(ExamModalComponent, {
      width: '500px',
      data: {
        exam

  }});
  dialogRef.afterClosed().subscribe((result) => {
    console.log(result);
  }
  );
}
}
