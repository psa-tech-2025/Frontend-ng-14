import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './common/component/popup/popup.component';
import { DiolougeComponent } from './common/diolouge/diolouge/diolouge.component';
import { ClickOutDirective } from './common/directive/click-out.directive';
import { DropdownPipelineComponent } from './common/drop-pipe/dropdown-pipeline/dropdown-pipeline.component';
import { CommaPipe } from './common/pipes/comma.pipe';
import { MyCommonModule } from './common/common.module';

@NgModule({
  declarations: [
        AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
