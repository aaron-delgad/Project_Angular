import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { routerConst} from './../../setting/constants/router.const'

@Component({
  selector: 'angul-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  opened = true;
  mode: MatDrawerMode = 'side';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  OpenCategory(){
    this.router.navigate([routerConst.admin.category.fullpath]);
  }

}
