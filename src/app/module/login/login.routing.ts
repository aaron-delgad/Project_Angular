import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConst } from './../../setting/constants/router.const';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: routerConst.clear,
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouting { }
