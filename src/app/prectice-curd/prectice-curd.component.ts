import { Component, OnInit } from '@angular/core';
import { TododataService } from '../tododata.service';
@Component({
  selector: 'app-prectice-curd',
  templateUrl: './prectice-curd.component.html',
  styleUrls: ['./prectice-curd.component.css']
})
export class PrecticeCurdComponent implements OnInit {

  Todos: any;
  todos = new Todo();

  constructor(public service: TododataService) {
  }
  ngOnInit(): void {
    this.getUsersdata();
  }
  submitdata(dataTransfer: any) {
    // console.log("Done submitting");
    // console.log(f);
    this.service.addusers(dataTransfer).subscribe({
      next: (res) => {
        this.getUsersdata();
        console.log(res);
        alert("Submit the data in database");
      }, error: (err) => {
        console.log("Error in submit data check the code >>>>>>", err);
      },
    })
  }
  getUsersdata() {
    this.service.getusers().subscribe({
      next: (res) => {
        this.Todos = res;
      }, error: (err) => {
        console.log("GetUserdata  give the error and he code >>>>>>>>>", err);
      },
    })
  }

  // deletedata(data: any) {
  //   this.service.deleteuser(data.id).subscribe({
  //     next(res){
  //       this.getUsersdata();check t
  //     },
  //     error (err) {
  //       console.log("Error in delete " + err);
  //     },
  //   })

  // }
  deletedata(data: any) {
    console.log(data);
    this.service.deleteuser(data.id).subscribe({
      next: (res) => {
        this.getUsersdata();
        console.log(res);

      },
      error: (err) => {
        console.log("Error in delete " + err);
      },
    })
  }
  editdata(data: any) {
    this.todos = data;
  }
}
export class Todo {
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  city!: string;
  zip!: number;
}
