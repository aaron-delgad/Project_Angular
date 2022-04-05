import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConst } from '../../../../setting/constants/router.const';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
  {
    path: routerConst.clear ,
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListsRouting { }
