import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TerrainComponent } from './terrain/terrain.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryComponent } from './category/category.component';
import { RedevableComponent } from './redevable/redevable.component';
import { TauxComponent } from './taux/taux.component';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TerrainComponent,
    CategoryComponent,
    RedevableComponent,
    TauxComponent,
    HomeComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TableModule,
    ButtonModule,
    FontAwesomeModule,
    MatSnackBarModule,
    BrowserAnimationsModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
