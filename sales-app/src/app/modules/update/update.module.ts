import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { TeamUpdateComponent } from './components/team-update/team-update.component';

@NgModule({
  declarations: [TeamUpdateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule
  ]
})
export class UpdateModule { }
