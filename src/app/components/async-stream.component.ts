import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test',
  template: `
      <div>{{ personName | async }}</div>
    `
})
export class AsyncComponent {
  personName: Observable<string>;
}
