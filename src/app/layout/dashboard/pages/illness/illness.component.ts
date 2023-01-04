import { IllnessService } from './../../../../shared/services/illness/illness.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-illness',
  templateUrl: './illness.component.html',
  styleUrls: ['./illness.component.scss'],
})
export class IllnessComponent implements OnInit {
  public illness: any = {};
  constructor(
    private illnessService: IllnessService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getIllness();
  }

  getIllness() {
    const id = this.route.snapshot.paramMap.get('id');
    this.illnessService.getIllnessById(id).subscribe((response: any) => {
      this.illness = response.data;
    console.log(this.illness);

    });
  }
}
