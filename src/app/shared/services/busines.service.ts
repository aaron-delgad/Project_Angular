import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from './../model/users.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinesService {

  UrlPrincipal = environment.urlPrincipal;
  UrlUsersAll = this.UrlPrincipal + environment.backend.user.AllUser;

  constructor(private readonly httpClient: HttpClient) { }

  UserAll():Observable<Users[]>{
    return this.httpClient.get(this.UrlUsersAll)
    .pipe(map(resp => Users.create_objects(resp)));
  }
}
