import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuelPage } from './fuel.page';

const routes: Routes = [
  {
    path: '',
    component: FuelPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelPageRoutingModule {}
