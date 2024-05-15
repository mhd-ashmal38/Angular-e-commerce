import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SearchPipe } from './transform/search.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    SidebarComponent,
    PieChartComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule,
    HighchartsChartModule
  ],
  providers: [ToastService],
})
export class AdminModule { }
