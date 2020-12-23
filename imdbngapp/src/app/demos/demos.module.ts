import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './demos/hello/hello.component';
import { Hello2Component } from './hello2/hello2.component';



@NgModule({
  declarations: [HelloComponent, Hello2Component],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent
  ]
})
export class DemosModule { }
