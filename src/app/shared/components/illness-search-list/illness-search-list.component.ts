import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-illness-search-list',
  templateUrl: './illness-search-list.component.html',
  styleUrls: ['./illness-search-list.component.scss'],
})
export class IllnessSearchListComponent implements OnInit {
  @Input() illnessSearchList: any[]; //list of illness to be displayed

   isScrollDisabled = false; //used to enable and disable scroll while using the scroll bar
  letterGroups: Array<string> = []; //each letter that will show up in a divider. Used for validLetters
  groups: Array<any> = []; //{ illnesses: Array<string>, letterGroup: string }

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {
  }
  
  //used in the html file to set a unique id for each group
  getGroupId(letter: string) {
    return `alphabet-scroll-${letter}`;
  }

  //called upon each emitted letter change
  goToLetterGroup(letter: string) {
    console.log('scrolling to ',letter);
    this.isScrollDisabled = true;
    let elementId = `alphabet-scroll-${letter}`;
    let element = document.getElementById(elementId);
    element.scrollIntoView();
    // hapticsImpactLight();
  }

  //Disables the scroll while user is using the scroll bar
  enableScroll() {
    this.isScrollDisabled = false;
  }

  //creates groups by first letter of name
  sort(illnesses) {
    this.letterGroups = [];
    let sortedillnesses = illnesses.sort((a, b) => a.word.localeCompare(b.word));
    sortedillnesses.forEach((illnesses) => {
      console.log(illnesses.illnesses)
      illnesses.illnesses.sort((a, b) => a.name.localeCompare(b.name));
  });
  }

  ngOnInit(): void {

    this.sort(this.illnessSearchList);
    console.log(this.groups)
  }

  openDiseaseModal(id: any) {
    this.router.navigate(['/illness', id]);
  }
}
