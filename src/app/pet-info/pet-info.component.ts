import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pet:Pet =  {
    name: 'Willy',
    breed: 'Killer Whale'
  };

}
