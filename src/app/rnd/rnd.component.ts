import { Component, OnInit } from '@angular/core';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { Hero } from './hero';

@Component({
  selector: 'flp-rnd',
  templateUrl: './rnd.component.html',
  styleUrls: ['./rnd.component.css']
})
export class RndComponent implements OnInit {
  aValue = 'Anthony';
  aProperty = 'something';
  anEvent = false;
  ngModelProperty = 'something else';

  anArray: number[];
  popped: number;

  private someProperty:string = 'some kind of property';

  isUnchanged: boolean = false;

  private evilTitle: string = 'Template <script>alert("evil never sleeps")</script>Syntax';

  private hone: number = 0;

  heroes = [
    new Hero(1, 'guy1'),
    new Hero(2, 'guy2')
  ];

  constructor() {
    this.anArray = [1, 2, 3, 4, 5, 6, 7];
   }

  ngOnInit() {
  }

  aMethod() {
    if ( this.anEvent === true) {
      this.aValue = 'Bobby';
    } else {
      this.aValue = 'Anthony';
    }
    this.anEvent = !this.anEvent;
    this.isUnchanged = !this.isUnchanged;
  }

  updateNums() {
    this.popped = this.anArray.pop();
  }
  
  h1(e: any){
    this.hone = this.hone + 1;
    console.log(e);
  }
}
