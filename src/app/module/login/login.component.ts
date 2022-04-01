import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { login } from './../../setting/lang/const.login';
import { regexConst } from './../../setting/constants/general.const';
import { CoreService} from './../../shared/services/core.service';

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

  constructor(public readonly coreService: CoreService ) { }

  ngOnInit(): void {
    this.ngFormLogin();
  }

  ngFormLogin(){
    this.datosForm = new FormGroup({
      user: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.pattern(regexConst.email), Validators.required])
    })
  }
}
