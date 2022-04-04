import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'angul-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened = true;
  mode: MatDrawerMode = 'side';

  constructor() { }

  ngOnInit(): void {
  }

}
