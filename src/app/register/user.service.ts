import { Injectable } from '@angular/core';
import { user } from '../conn/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  articleUrl = "http://localhost:49671/api/register/insertuser";
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  
  })
  };



  createArticle(UserObj: user): Observable<user> {
    
    return this.http.post<user>(this.articleUrl, UserObj,this.httpOptions);
}
  
 
}
