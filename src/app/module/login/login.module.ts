import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms'
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRouting,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class LoginModule { }
