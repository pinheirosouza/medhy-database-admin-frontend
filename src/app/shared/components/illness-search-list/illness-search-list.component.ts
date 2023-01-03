import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-illness-search-list',
  templateUrl: './illness-search-list.component.html',
  styleUrls: ['./illness-search-list.component.scss'],
})
export class IllnessSearchListComponent implements OnInit {
  @Input()
  public illnessSearchList: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openDiseaseModal(id: any) {
    this.router.navigate(['/illness', id]);
  }
}
