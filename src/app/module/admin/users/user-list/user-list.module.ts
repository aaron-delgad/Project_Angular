import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListsRouting } from './users-list.routing';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserListsRouting,
    MatCardModule,
    MatTableModule
  ],
  exports:[
    UserListComponent
  ]
})
export class UserListModule { }
