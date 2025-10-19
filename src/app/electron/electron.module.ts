import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronComponent } from './electron.component';



@NgModule({
  declarations: [ElectronComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ElectronComponent
  ]
})
export class ElectronModule { }
