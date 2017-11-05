import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { SharedModule } from '@app/shared';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
