import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './_components/menu/menu.component';
import { AdminSessionService } from './_services/admin-session.service';
import { LoginGuard } from './_guards/admin-login.guards';
import { LoginComponent } from './_components/login/login.component';
import { ImMaterialModule } from '../../../_material/_material.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from './_services/login.service';
import { FoodComponent } from './_components/food/food.component';
import { FoodService } from './_services/food.service';
import { MenuService } from './_services/menu.service';
import { ComposeMenuComponent } from './_components/compose-menu/compose-menu.component';
import { MAT_DATE_LOCALE } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'menu',
        // canActivate: [LoginGuard],
        component: MenuComponent
      },
      {
        path: 'soan-menu',
        // canActivate: [LoginGuard],
        component: ComposeMenuComponent
      },
      {
        path: 'foods',
        // canActivate: [LoginGuard],
        component: FoodComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ImMaterialModule],
  declarations: [LoginComponent, AdminComponent, MenuComponent, FoodComponent, ComposeMenuComponent],
  exports: [RouterModule],
  providers: [AdminSessionService, LoginGuard, LoginService, FoodService, MenuService,
    {provide: MAT_DATE_LOCALE, useValue: 'vi-VN'}]
})
export class AdminModule {}
