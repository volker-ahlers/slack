import { Component, Input } from '@angular/core';
import { ServdynamicService } from '../../services/servdynamic.service';

@Component({
  selector: 'app-servicetest3',
  templateUrl: './servicetest3.component.html',
  styleUrls: ['./servicetest3.component.less'],
  providers:[ServdynamicService]
})
export class Servicetest3Component {
  @Input() title: string = 'initial';
  @Input() text: string = 'servicvetest3';
  
  constructor(public serv: ServdynamicService) {}
  setTitle(title: string) {
    this.serv.setTitle(`${this.text} | ${title}`);
  }
  getTitle(){
    this.title = this.serv.getTitle();
  }
}
