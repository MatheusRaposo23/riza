import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContatoComponent} from './contato/contato.component';
import {EquipeComponent} from './equipe/equipe.component';
import {EstrategiasComponent} from './estrategias/estrategias.component';
import {NossasRaizesComponent} from './nossas-raizes/nossas-raizes.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {RizaComponent} from './riza/riza.component';

const routes: Routes = [
  { path: 'contato', component: ContatoComponent},
  { path: 'equipe',  component: EquipeComponent },
  { path: 'estrategias', component: EstrategiasComponent},
  { path: 'nossasRaizes', component: NossasRaizesComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'riza', component: RizaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
