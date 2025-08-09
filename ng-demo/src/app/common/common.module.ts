import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './component/popup/popup.component';
import { DropdownPipelineComponent } from './drop-pipe/dropdown-pipeline/dropdown-pipeline.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { FormErrorDirective } from './directive/form-error.directive';




@NgModule({
  declarations: [
        PopupComponent,
        DropdownPipelineComponent,
        FooterComponent,
        HeaderComponent,
        LoaderComponent,
        FormErrorDirective,
      
  ],
  imports: [
    CommonModule
  ],
    exports: [
    PopupComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    FormErrorDirective,
  
  ]
})
export class MyCommonModule  { }
