import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-and-symptoms-form',
  templateUrl: './sign-and-symptoms-form.component.html',
  styleUrls: ['./sign-and-symptoms-form.component.scss'],
})
export class SignAndSymptomsFormComponent implements OnInit {
  @Input()
  public form: any;

  constructor() {}

  ngOnInit(): void {}

  handleFormSubmit() {
    console.log(this.form.value);
  }

}
