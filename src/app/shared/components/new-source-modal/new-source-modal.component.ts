import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-source-modal',
  templateUrl: './new-source-modal.component.html',
  styleUrls: ['./new-source-modal.component.scss']
})
export class NewSourceModalComponent implements OnInit {
  public origin;
  public source;
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.origin);
    console.log(this.source);
    //call post method to add new source
  }

  addAndClear(){
    console.log(this.origin);
    console.log(this.source);
    //call post method to add new source
    this.origin = '';
    this.source = '';
  }

}
