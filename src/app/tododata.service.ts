import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get(this.url+'/Todo-List');
  }
  deleteuser(Id:any){
    return this.http.delete(this.url+'/Todo-List?id=', Id);
  }
}
