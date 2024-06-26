import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhdNavRoutes } from './shared/routing.config';

@NgModule({
  imports: [RouterModule.forRoot(DhdNavRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
