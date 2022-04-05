import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConst } from '../../setting/constants/router.const';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: routerConst.clear ,
    component: AdminComponent,
    children:[
      {
        path: routerConst.clear, redirectTo:routerConst.admin.users.path, pathMatch:'full'
      },
      {
        path: routerConst.admin.users.path,
        loadChildren: () => import('./users/users.module').then (m => m.UsersModule)
      },
      {
        path: routerConst.admin.category.path,
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
