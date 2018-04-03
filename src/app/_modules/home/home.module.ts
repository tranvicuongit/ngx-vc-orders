import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './_components/order/order.component';
import { ReviewComponent } from './_components/review/review.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'orders',
        component: OrderComponent
      },
      {
        path: 'review',
        component: ReviewComponent
      },
      {
        path: '**',
        redirectTo: 'orders',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, OrderComponent, ReviewComponent],
  exports: [RouterModule]
})
export class HomeModule { }
