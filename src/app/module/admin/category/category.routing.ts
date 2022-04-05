import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConst } from '../../../setting/constants/router.const';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: routerConst.clear ,
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRouting { }
