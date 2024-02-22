import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TituloComponent } from './titulo/titulo.component';
import { CardGrandeComponent } from './card-grande/card-grande.component';
import { CardPequenoComponent } from './card-pequeno/card-pequeno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TituloComponent,
    CardGrandeComponent,
    CardPequenoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
