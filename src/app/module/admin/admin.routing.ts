import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConst } from '../../setting/constants/router.const';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: routerConst.admin.path,
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
