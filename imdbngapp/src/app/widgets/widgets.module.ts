import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wig1Component } from './wig1/wig1.component';
import { Wig2Component } from './wig2/wig2.component';
import { Wig3Component } from './wig3/wig3.component';
import { Pip1Pipe } from './pip1.pipe';
import { Sev1Service } from './sev1.service';



@NgModule({
  declarations: [Wig1Component, Wig2Component, Wig3Component, Pip1Pipe],
  imports: [
    CommonModule
  ],
  exports: [
    Wig1Component, Wig2Component, Wig3Component, Pip1Pipe
  ]
})
export class WidgetsModule { }  