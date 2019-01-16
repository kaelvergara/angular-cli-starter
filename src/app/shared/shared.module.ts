import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MaterialModule } from './modules/material.module';
import { Components } from './components';
import { Directives } from './directives';
import { Pipes } from './pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [
    ...Components,
    ...Directives,
    ...Pipes,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ...Components,
    ...Directives,
  ],
  entryComponents: [
    ...Components,
  ],
})
export class SharedModule { }
