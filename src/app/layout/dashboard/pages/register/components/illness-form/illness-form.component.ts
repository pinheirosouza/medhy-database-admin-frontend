import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { IllnessService } from 'src/app/shared/services/illness/illness.service';

@Component({
  selector: 'app-illness-form',
  templateUrl: './illness-form.component.html',
  styleUrls: ['./illness-form.component.scss'],
})
export class IllnessFormComponent implements OnInit {
  @Input()
  public form: any;

  constructor(
    private router: Router,
    private illnessService: IllnessService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  handleFormSubmit() {
    this.generateIllnessCode();
    this.illnessService.create(this.form.value).subscribe((res:any) => {
      console.log(res);
      if(!res.success) {
        alert(res.message);
      }
      localStorage.setItem('illnessId', res.data._id);
    });
    
 
  }

  generateIllnessCode() {
    if(this.form.value.code ) return;
    let illnessCode = this.form.value.name.substring(0, 3).toUpperCase();
    let random = Math.floor(Math.random() * 1000);
    let code = illnessCode + random;
    this.form.value.code = code;
  }
}
