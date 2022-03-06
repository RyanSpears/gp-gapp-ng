import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookPage } from './book.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { BookPageRoutingModule } from './book-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BookPageRoutingModule
  ],
  declarations: [BookPage]
})
export class BookPageModule { }
