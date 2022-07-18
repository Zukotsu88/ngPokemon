import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeDashboardComponent } from './poke-dashboard/poke-dashboard.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { PokeTypeComponent } from './poke-type/poke-type.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeDashboardComponent,
    PokeDetailComponent,
    PokeTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
