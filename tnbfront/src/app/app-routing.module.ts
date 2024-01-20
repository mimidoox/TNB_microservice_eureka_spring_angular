import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TerrainComponent } from './terrain/terrain.component';
import { CategoryComponent } from './category/category.component';
import { RedevableComponent } from './redevable/redevable.component';
import { TauxComponent } from './taux/taux.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'terrain', component: TerrainComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'redevable', component: RedevableComponent },
  { path: 'taux', component: TauxComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: '', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
