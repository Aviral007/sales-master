import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UpdateRoutingModule } from './update-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TeamUpdateComponent } from './components/team-update/team-update.component';

@NgModule({
  declarations: [TeamUpdateComponent],
  imports: [
    UpdateRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UpdateModule { }
