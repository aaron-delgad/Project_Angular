import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConst } from './setting/constants/router.const';

const routes: Routes = [
  {
    path: routerConst.clear,
    loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
