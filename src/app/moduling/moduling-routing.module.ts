import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronComponent } from '../electron/electron.component';
import { ModulingComponent } from './moduling.component';

const routes: Routes = [{ path: 'moduling', component: ModulingComponent,
children: [
    {
      path: 'electron',
      component: ElectronComponent
     }
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulingRoutingModule { }
