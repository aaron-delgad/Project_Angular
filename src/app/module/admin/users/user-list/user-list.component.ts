import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConstUser } from 'src/app/setting/lang/const.table-user';
import { Users } from './../../../../shared/model/users.model';
import { BusinesService } from './../../../../shared/services/busines.service';

@Component({
  selector: 'angul-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user = ConstUser;

  displayedColumns: string[] = ['firstname', 'lastname','username', 'email', 'address','phone'];
  dataSource = new MatTableDataSource<Users>([]);

  constructor(private readonly businesService: BusinesService) { }

  ngOnInit(): void {
    this.businesService.UserAll().subscribe(resp =>{
      this.dataSource.connect().next(resp);
      console.log(resp);
    })
  }

}
