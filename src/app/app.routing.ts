import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConst } from './setting/constants/router.const';

const routes: Routes = [
  {
    path: routerConst.clear, redirectTo: routerConst.login.path, pathMatch:'full'
  },
  {
    path: routerConst.login.path,
    loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)
  },
  {
    path: routerConst.admin.path,
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
