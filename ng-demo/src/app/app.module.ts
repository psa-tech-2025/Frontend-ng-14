import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCommonModule } from './common/common.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnersInterceptor } from './common/shared/loader/spinners.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { UserinfoComponent } from './userDetails/userinfo/userinfo.component';
import { DiolougeModule } from './share/Diolouge/diolouge/diolouge.module';

@NgModule({
  declarations: [
        AppComponent,
        UserinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCommonModule,
    DiolougeModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:SpinnersInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
