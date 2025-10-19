import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservService } from '../services/observ.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.less']
})
export class ErrorComponent {

  errormessage: Observable<string>;

  constructor(private observService: ObservService) {
    this.errormessage =  this.observService.getError$;
  }

  ngOnInit() { }
}
