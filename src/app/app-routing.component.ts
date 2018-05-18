import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const route: Routes = [
  {
    path: 'admin-xinh-dep',
    loadChildren: './_modules/admin/admin.module#AdminModule'
  },
  {
      path: '',
      loadChildren: './_modules/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(route, { useHash: true }),
  ],
  providers: []
})
export class AppRoutingModule {}
