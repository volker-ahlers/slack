import { Component, Input } from '@angular/core';
import { ServdynamicService } from '../../services/servdynamic.service';

@Component({
  selector: 'app-servicetest1',
  templateUrl: './servicetest1.component.html',
  styleUrls: ['./servicetest1.component.less'],
})
export class Servicetest1Component {
  @Input() title: string = 'initial';
  @Input() text: string = 'servicvetest1';

  constructor(public serv: ServdynamicService) {}
  setTitle(title: string) {
    this.serv.setTitle(`${this.text} | ${title}`);
  }
  getTitle(){
    this.title = this.serv.getTitle();
  }
}
