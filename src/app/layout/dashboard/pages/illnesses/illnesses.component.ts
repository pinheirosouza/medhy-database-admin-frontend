import { IllnessService } from './../../../../shared/services/illness/illness.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-illnesses',
  templateUrl: './illnesses.component.html',
  styleUrls: ['./illnesses.component.scss'],
})
export class IllnessesComponent implements OnInit {
  public form: FormGroup;

  // generate list of illness separeted by first letter
  public illnesses: Array<any> = [];

  constructor(private illnessService: IllnessService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getIllnesses();
  }

  public initializeForm(): void {
    this.form = new FormGroup({
      cid: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  getIllnesses(): void {
    this.illnessService.getAllIlnesses().subscribe((data) => {
      this.illnesses = data;
    });
  }
}
