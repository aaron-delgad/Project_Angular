import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRouting} from './users.routing';
import { ComponentSaveUpdateUserComponent } from './component-save-update-user/component-save-update-user.component';
import { UserListModule} from './user-list/user-list.module';

@NgModule({
  declarations: [
    UsersComponent,
    ComponentSaveUpdateUserComponent
  ],
  imports: [
    CommonModule,
    UsersRouting,
    UserListModule
  ]
})
export class UsersModule { }
