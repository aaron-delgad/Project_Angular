import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { login } from './../../setting/lang/const.login';
import { regexConst } from './../../setting/constants/general.const';
import { CoreService} from './../../shared/services/core.service';
import { Router } from '@angular/router';
import { routerConst } from 'src/app/setting/constants/router.const';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'angul-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = login;
  matcher = new MyErrorStateMatcher();

  datosForm: FormGroup | undefined;

  constructor(public readonly coreService: CoreService,
    private readonly router:Router ) { }

  ngOnInit(): void {
    this.ngFormLogin();
  }

  ngFormLogin(){
    this.datosForm = new FormGroup({
      user: new FormControl('radees.24.16@gmail.com',[Validators.email,Validators.required]),
      password: new FormControl('Aaron71983311@',[Validators.pattern(regexConst.email), Validators.required])
    });
  }

  open(){
    this.router.navigate([routerConst.admin.users.fullpath]);
  }
}
