import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulingRoutingModule } from './moduling-routing.module';
import { ModulingComponent } from './moduling.component';
import { ElectronModule } from '../electron/electron.module';


@NgModule({
  declarations: [
    ModulingComponent
  ],
  imports: [
    CommonModule,
    ModulingRoutingModule,
    ElectronModule
  ]
})
export class ModulingModule { }
