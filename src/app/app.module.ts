import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NaviComponent } from './navi/navi.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ElemchangerDirective } from './directives/elemchanger.directive';
import { ValidatorDirective } from './directives/validator.directive';
import { FormComponent } from './form/form.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ModulingModule } from './moduling/moduling.module';
import { ElectronModule } from './electron/electron.module';
import { ServicetestModule } from './servicetest/servicetest.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    TestComponent,
    ErrorComponent,
    NaviComponent,
    ElemchangerDirective,
    ValidatorDirective,
    FormComponent,
    TemplateformComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ServicetestModule,
    ModulingModule,
    AppRoutingModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ElectronModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
