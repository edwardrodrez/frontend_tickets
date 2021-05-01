import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

//Material modules
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { TicketsComponent } from './views/tickets/tickets.component';

//Serivicios
import { TicketsService } from './services/tickets.service';



@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatBadgeModule
  ],
  providers: [
    TicketsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
