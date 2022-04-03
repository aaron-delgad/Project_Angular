import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConst } from '../../../setting/constants/router.const';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: routerConst.clear ,
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRouting { }
