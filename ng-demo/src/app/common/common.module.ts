import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './component/popup/popup.component';
import { DiolougeComponent } from './diolouge/diolouge/diolouge.component';
import { ClickOutDirective } from './directive/click-out.directive';
import { DropdownPipelineComponent } from './drop-pipe/dropdown-pipeline/dropdown-pipeline.component';
import { CommaPipe } from './pipes/comma.pipe';



@NgModule({
  declarations: [
        PopupComponent,
        DiolougeComponent,
        ClickOutDirective,
        DropdownPipelineComponent,
        CommaPipe,
  ],
  imports: [
    CommonModule
  ],
    exports: [
    PopupComponent,
    DiolougeComponent,
    ClickOutDirective,
    CommaPipe
  ]
})
export class MyCommonModule  { }
