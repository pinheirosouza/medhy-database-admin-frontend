import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-illness-form',
  templateUrl: './illness-form.component.html',
  styleUrls: ['./illness-form.component.scss'],
})
export class IllnessFormComponent implements OnInit {
  @Input()
  public form: any;

  constructor() {}

  ngOnInit(): void {}
}
