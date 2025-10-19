import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServdynamicService {
  title: string = 'initialsdynamic';
  constructor() {}

  setTitle(title: string) {
    console.log(title);
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}
