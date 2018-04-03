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

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'menu',
        canActivate: [LoginGuard],
        component: MenuComponent
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
  declarations: [LoginComponent, AdminComponent, MenuComponent],
  exports: [RouterModule],
  providers: [AdminSessionService, LoginGuard, LoginService]
})
export class AdminModule {}
