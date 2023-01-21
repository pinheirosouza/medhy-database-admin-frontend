import { Component, OnInit } from '@angular/core';
import { SourceService } from '../../services/source/source.service';

@Component({
  selector: 'app-new-source-modal',
  templateUrl: './new-source-modal.component.html',
  styleUrls: ['./new-source-modal.component.scss']
})
export class NewSourceModalComponent implements OnInit {
  public origin;
  public link;
  constructor(
    private sourceService: SourceService
    
  ) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.origin);
    console.log(this.link);
    //call post method to add new source
    this.createSource();
  }

  addAndClear(){
    console.log(this.origin);
    console.log(this.link);
    //call post method to add new source
    this.createSource();    
    this.origin = '';
    this.link = '';
  }

  createSource(){
    this.sourceService.create({
      illnessId: localStorage.getItem('illnessId'),
      origin: this.origin,
      link: this.link
    }).subscribe((res:any) => {
      console.log(res);
      if(!res.success) {
        alert(res.message);
      }
    });
  }

}
