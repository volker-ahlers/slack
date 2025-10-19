import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicetestRoutingModule } from './servicetest-routing.module';
import { ServicetestComponent } from './servicetest.component';

import { Servicetest1Component } from './servicetest1/servicetest1.component';
import { Servicetest2Component } from './servicetest2/servicetest2.component';
import { Servicetest3Component } from './servicetest3/servicetest3.component';


@NgModule({
  declarations: [
    ServicetestComponent,
    Servicetest1Component,
    Servicetest2Component,
    Servicetest3Component
  ],
  imports: [
    CommonModule,
    ServicetestRoutingModule,

  ],
  exports: [
    Servicetest1Component,
    Servicetest2Component,
    Servicetest3Component
  ]
})
export class ServicetestModule { }
