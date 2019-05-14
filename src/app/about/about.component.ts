import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, fromEvent } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const interval$ = interval(1000);

    interval$.subscribe((val) =>  console.log('stream 1 =>' + val));

    const click$ = fromEvent(document, 'click');
    click$.subscribe(evt => console.log(evt));
  }
}

/**
 * Observables are blueprints how streams will behave or definitions of values (streams)
 * An observable will only become a stream once we subscribe to it. Once we have
 * subscribed to an observable we have created a stream of values *
 */
