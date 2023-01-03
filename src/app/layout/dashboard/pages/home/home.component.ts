import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectorCards: any[] = [
    {
      title: 'Doenças',
      description: 'Visualizar, registrar e vincular doenças',
      icon: 'coronavirus',
      routerLink: '/illnesses',
    },
    {
      title: 'Fontes',
      description: 'Cadastre e visualize fontes recomendadas',
      icon: 'summarize',
      routerLink: 'https://angular.io/',
    },
  ];
  breakpoint: number;
  rowHeight: string;

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth <= 788) {
      this.breakpoint = 1;
      this.rowHeight = '4:1';
    } else if (window.innerWidth <= 1024) {
      this.breakpoint = 2;
      this.rowHeight = '2:1';
    } else {
      this.breakpoint = 3;
      this.rowHeight = '2:1';
    }
  }

  onResize(event: any) {
    if (event.target.innerWidth <= 788) {
      this.breakpoint = 1;
      this.rowHeight = '4:1';
    } else if (event.target.innerWidth <= 1024) {
      this.breakpoint = 2;
      this.rowHeight = '2:1';
    } else {
      this.breakpoint = 3;
      this.rowHeight = '2:1';
    }
  }
}
