import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-illness-search-list',
  templateUrl: './illness-search-list.component.html',
  styleUrls: ['./illness-search-list.component.scss'],
})
export class IllnessSearchListComponent implements OnInit {
  @Input() illnessSearchList: any[]; 

   isScrollDisabled = false; 
  letterGroups: Array<string> = []; 
  groups: Array<any> = []; 

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {
  }
  
  getGroupId(letter: string) {
    return `alphabet-scroll-${letter}`;
  }

  goToLetterGroup(letter: string) {
    console.log('scrolling to ',letter);
    this.isScrollDisabled = true;
    let elementId = `alphabet-scroll-${letter}`;
    let element = document.getElementById(elementId);
    element.scrollIntoView();
    // hapticsImpactLight();
  }

  enableScroll() {
    this.isScrollDisabled = false;
  }

  sort(illnesses) {
    let sortedillnesses = illnesses.sort((a, b) => a.word.localeCompare(b.word));
    sortedillnesses.forEach((illnesses) => {
      console.log(illnesses.illnesses)
      illnesses.illnesses.sort((a, b) => a.name.localeCompare(b.name));
  });
  this.letterGroups = sortedillnesses.map((illnesses) => illnesses.word);
  }

  ngOnInit(): void {

    this.sort(this.illnessSearchList);
  }

  openDiseaseModal(id: any) {
    this.router.navigate(['/illness', id]);
  }
}
