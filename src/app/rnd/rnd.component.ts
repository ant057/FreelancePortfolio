import { Component, OnInit } from '@angular/core';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';

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

  constructor() { }

  ngOnInit() {
  }

  aMethod() {
    if( this.anEvent === true) {
      this.aValue = 'Bobby';
    } else {
      this.aValue = 'Anthony';
    }
    this.anEvent = !this.anEvent;
  }

}
