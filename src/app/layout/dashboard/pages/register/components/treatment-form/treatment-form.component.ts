import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment-form',
  templateUrl: './treatment-form.component.html',
  styleUrls: ['./treatment-form.component.scss'],
})
export class TreatmentFormComponent implements OnInit {
  @Input()
  public form: any;

  constructor() {}

  ngOnInit(): void {}
}
