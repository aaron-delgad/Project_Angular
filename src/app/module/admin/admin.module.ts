import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LayoutModule} from './layout/layout.module';
import { AdminRouting } from './admin.routing';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AdminComponent,
    CategoryComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AdminRouting
  ]
})
export class AdminModule { }
