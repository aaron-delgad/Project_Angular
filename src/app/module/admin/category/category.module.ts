import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRouting} from './category.routing';
import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRouting
  ]
})
export class CategoryModule { }
