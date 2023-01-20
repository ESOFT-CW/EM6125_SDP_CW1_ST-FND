import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationStockComponent } from './station-stock/station-stock.component';
import { StationDasboardComponent } from './station-dasboard/station-dasboard.component';
import { StationRequestComponent } from './station-request/station-request.component';
import { StationApproveComponent } from './station-approve/station-approve.component';

@NgModule({
  declarations: [
    AppComponent,
    StationStockComponent,
    StationDasboardComponent,
    StationRequestComponent,
    StationApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
