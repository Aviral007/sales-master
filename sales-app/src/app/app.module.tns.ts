import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
