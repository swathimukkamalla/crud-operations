import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import { PageserviceComponent } from './pageservice/pageservice.component';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
 

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    DisplaydataComponent,
    PageserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
