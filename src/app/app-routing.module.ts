import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDashboardComponent } from './poke-dashboard/poke-dashboard.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { PokeTypeComponent } from './poke-type/poke-type.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/pokeDashboard', pathMatch: 'full'},
  { path: 'pokeDashboard', component: PokeDashboardComponent },
  { path: 'pokeDetail/:id', component: PokeDetailComponent },
  { path: 'pokeType/:type', component: PokeTypeComponent },
  { path: '**', redirectTo: '/pokeDashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
