import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinesService {

  UrlPrincipal = environment.urlPrincipal;
  UrlUsersAll = this.UrlPrincipal + environment.backend.user.AllUser;

  constructor(private readonly httpClient: HttpClient) { }

  UserAll():Observable<any>{
    return this.httpClient.get(this.UrlUsersAll)

  }
}
