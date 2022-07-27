import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentRecordPageComponent } from './pages/assignment-record-page/assignment-record-page.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentRecordPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRecordRoutingModule { }
