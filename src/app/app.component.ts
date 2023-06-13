import { Component, Injectable } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';


@Injectable()


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/style.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
}

