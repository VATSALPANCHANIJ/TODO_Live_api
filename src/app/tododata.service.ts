import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TododataService {

  url: string = 'http://10.10.3.171:5081'
  constructor(private http: HttpClient) { }

  addusers(body: any) {
    return this.http.post(this.url + '/Todo-List', body);
  }
  getusers() {
    return this.http.get(this.url + '/Todo-List');
  }
  deleteuser(Id: any) {
    return this.http.delete(this.url + '/Todo-List?id=' + Id);
  }
  updateusers(Id: any, data: any) {
    return this.http.put(this.url + '/Todo-list?id=' + Id, data);
  }
}
