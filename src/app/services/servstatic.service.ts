import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServstaticService {

  title: string = 'initialstatic';
  constructor() {}

  setTitle(title: string) {
    alert(title);
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}
