import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicetestComponent } from './servicetest.component';

const routes: Routes = [{ path: 'servicetest', component: ServicetestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicetestRoutingModule { }
