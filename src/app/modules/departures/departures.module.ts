import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeparturesRoutingModule } from './departures-routing.module';
import { DeparturePageComponent } from './pages/departure-page/departure-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { TablePublishersPageComponent } from './pages/table-publishers-page/table-publishers-page.component';
import { EditDeparturesComponent } from './pages/edit-departures/edit-departures.component';
import { FormEditDeparturesComponent } from './components/form-edit-departures/form-edit-departures.component';


@NgModule({
  declarations: [
    DeparturePageComponent,
    GroupPageComponent,
    TablePublishersPageComponent,
    EditDeparturesComponent,
    FormEditDeparturesComponent
  ],
  imports: [
    CommonModule,
    DeparturesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DeparturesModule { }
