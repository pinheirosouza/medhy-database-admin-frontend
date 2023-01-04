import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-illness-form',
  templateUrl: './illness-form.component.html',
  styleUrls: ['./illness-form.component.scss'],
})
export class IllnessFormComponent implements OnInit {
  @Input()
  public form: any;

  constructor(
    private route: Router
  ) {}

  ngOnInit(): void {}

  handleFormSubmit() {
    console.log(this.form.value);
 
  }
}
