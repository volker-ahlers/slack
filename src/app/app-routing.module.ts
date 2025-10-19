import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { ElectronComponent } from './electron/electron.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {path: 'comp', component: CompComponent},
  {path: 'templateform', component: TemplateformComponent},
  {path: 'electron', component: ElectronComponent},
  {path: 'home', component: HomeComponent},
  {path: 'table', component: TableComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'moduling', loadChildren: () => import('./moduling/moduling.module').then(m => m.ModulingModule) },
  { path: 'moduling', loadChildren: () => import('./servicetest/servicetest.module').then(m => m.ServicetestModule) },
  {path: '**', redirectTo: '/home', pathMatch: 'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
