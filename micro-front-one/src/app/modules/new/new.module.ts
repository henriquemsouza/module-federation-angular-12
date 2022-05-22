import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { NewSampleComponent } from '../components/new-sample/new-sample.component';


@NgModule({
  declarations: [
    NewComponent,
    NewSampleComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }
