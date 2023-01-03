import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-selector-card',
  templateUrl: './home-selector-card.component.html',
  styleUrls: ['./home-selector-card.component.scss'],
})
export class HomeSelectorCardComponent implements OnInit {
  @Input() title: string = 'title';
  @Input() description: string = 'description';
  @Input() icon: string = 'link';
  @Input() routerLink: string = '';

  constructor() {}

  ngOnInit(): void {}
}
