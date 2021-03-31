import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {
  names: string[] = ['Maggie', 'Kate', 'Carmen'];

  people: any[] = [
    { firstName: 'Maggie', lastName: 'Oudsema' },
    { firstName: 'Shawn', lastName: 'Oudsema' },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByPeople(_index: number, person: any) {
    return person.lastName;
  }
}
