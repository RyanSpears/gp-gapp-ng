import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuelPage } from './fuel.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FuelPageRoutingModule } from './fuel-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FuelPageRoutingModule
  ],
  declarations: [FuelPage]
})
export class FuelPageModule {}
