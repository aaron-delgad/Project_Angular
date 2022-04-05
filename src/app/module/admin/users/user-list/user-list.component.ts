import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConstUser } from 'src/app/setting/lang/const.table-user';

@Component({
  selector: 'angul-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user = ConstUser;

  displayedColumns: string[] = ['firstname', 'lastname','username', 'email', 'address','phone'];
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
  }

}
