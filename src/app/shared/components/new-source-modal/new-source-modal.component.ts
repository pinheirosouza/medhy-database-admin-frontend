import { Component, OnInit } from '@angular/core';
import { SourceService } from '../../services/source/source.service';

@Component({
  selector: 'app-new-source-modal',
  templateUrl: './new-source-modal.component.html',
  styleUrls: ['./new-source-modal.component.scss']
})
export class NewSourceModalComponent implements OnInit {
  public origin;
  public source;
  constructor(
    private sourceService: SourceService
    
  ) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.origin);
    console.log(this.source);
    //call post method to add new source
    this.createSource();
  }

  addAndClear(){
    console.log(this.origin);
    console.log(this.source);
    //call post method to add new source
    this.createSource();    
    this.origin = '';
    this.source = '';
  }

  createSource(){
    this.sourceService.create({
      id: localStorage.getItem('illnessId'),
      origin: this.origin,
      source: this.source
    }).subscribe((res:any) => {
      console.log(res);
      if(!res.success) {
        alert(res.message);
      }
    });
  }

}
