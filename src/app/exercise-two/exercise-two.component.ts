import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css'],
  
})

export class ExerciseTwoComponent implements OnInit {

  appInput = 0;
  isChecked = false;
  isShown = true;

  constructor() { }

  ngOnInit(): void {
  }

  
}
