import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.addEventListener('click', evt => {  // mulit value streams that can never complete
      console.log(evt);
    });

    let counter = 0;
    setInterval(() => {  // mulit value streams
      console.log(counter);
      counter++;
    }, 1000);

    setTimeout(() => { // A type of stream that will complete
      console.log('finished...');

    }, 3000);
  }
}


/**
 * Streams are collection of values emitted over time
 * and can either complete or not
 *
 */
