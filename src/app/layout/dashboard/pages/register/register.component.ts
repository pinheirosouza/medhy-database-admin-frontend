import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public forms: any;

  constructor() {}

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms() {
    this.forms = {};
    this.forms.illness = new FormGroup({
      cid: new FormControl(''),
      name: new FormControl(''),
    });
    this.forms.signAndSymptoms = new FormGroup({
      signs: new FormControl(''),
      symptoms: new FormControl(''),
    });
    this.forms.treatment = new FormGroup({
      medication: new FormControl(''),
      posology: new FormControl(''),
      examType: new FormControl(''),
      exam: new FormControl(''),
      others: new FormControl(''),
    });
  }
}
