import { Component, Input } from '@angular/core';
import { ServdynamicService } from '../../services/servdynamic.service';

@Component({
  selector: 'app-servicetest2',
  templateUrl: './servicetest2.component.html',
  styleUrls: ['./servicetest2.component.less'],
})
export class Servicetest2Component {
  @Input() title: string = 'initial';
  @Input() text: string = 'servicvetest2';

  constructor(public serv: ServdynamicService) {}
  setTitle(title: string) {
    this.serv.setTitle(`${this.text} | ${title}`);
  }
  getTitle() {
    this.title = this.serv.getTitle();
  }
}
