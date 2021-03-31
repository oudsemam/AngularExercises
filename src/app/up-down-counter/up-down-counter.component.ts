import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down-counter',
  templateUrl: './up-down-counter.component.html',
  styleUrls: ['./up-down-counter.component.css']
})
export class UpDownCounterComponent implements OnInit {
  count = 0

  upCountChange () {
    this.count +=1;
  }

  downCountChange() {
    this.count -= 1;
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
