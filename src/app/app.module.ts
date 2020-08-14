import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import { NossasRaizesComponent } from './nossas-raizes/nossas-raizes.component';
import { EstrategiasComponent } from './estrategias/estrategias.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';
import { RizaComponent } from './riza/riza.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NossasRaizesComponent,
    EstrategiasComponent,
    EquipeComponent,
    ProdutosComponent,
    ContatoComponent,
    RizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
