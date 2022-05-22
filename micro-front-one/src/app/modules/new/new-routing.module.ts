import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSampleComponent } from '../components/new-sample/new-sample.component';
import { NewComponent } from './new.component';

const routes: Routes = [
  { path: 'mfe1', component: NewComponent },
  { path: 'new-sample', component: NewSampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRoutingModule {}
