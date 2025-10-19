import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservService {
  test = new BehaviorSubject('initial value');
  x?: any;
  error$ : Subject<string> = new Subject<string>();
  getError$ = this.error$.asObservable();
  constructor() {
    this.x = this.test.subscribe({
      next: (value) => {console.log('The service value is: ', value),
      this.error$.next(`holyerrormessage: ${value}`)}
    });
  }
}