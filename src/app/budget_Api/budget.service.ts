import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  url: string = "http://10.10.3.171:5081"
  constructor(private http: HttpClient) { }

  addbudgetamount(body: any) {
    return this.http.post(this.url + '/BUDGET', body);
  }

  addexpensesamount(body: any) {
    return this.http.post(this.url + '/BUDGET', body);
  }
  getbudgetamount() {
    return this.http.get(this.url + '/BUDGET');
  }
  deleteexpense(body: any) {
    return this.http.delete(this.url + '/BUDGET/id?id=' + body);
    // BUDGET/?id=9
  }

  updateexpense(Id: any, data: any) {
    return this.http.put(this.url + '/BUDGET/?id=' + Id, data);
  }
}
