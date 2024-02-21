import { Component, OnInit } from '@angular/core';
import { TododataService } from '../tododata.service';
@Component({
  selector: 'app-prectice-curd',
  templateUrl: './prectice-curd.component.html',
  styleUrls: ['./prectice-curd.component.css']
})
export class PrecticeCurdComponent implements OnInit {
  isedit = false;

  Todos: any;
  todos = new Todo();

  constructor(public service: TododataService) { }

  ngOnInit(): void {
    this.getUsersdata();
    // this.createForm();
  }

  submitdata(dataTransfer: any) {

    // console.log("Done submitting");
    this.service.addusers(dataTransfer).subscribe({
      next: (res) => {
        console.log(res);
        // if (res) {
        //   this.service.getusers().subscribe();
        // }
        if (res) {
          if (!this.todos.firstname || !this.todos.lastname || !this.todos.city || !this.todos.password || !this.todos.email || !this.todos.zip) {
            alert("All filed requried")
          }
        }
        this.getUsersdata();
        alert("Submit the data in database");
        this.cleardata();
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

  deletedata(data: any) {
    // console.log(data);
    this.service.deleteuser(data.id).subscribe({
      next: (res) => {
        this.getUsersdata();
      },
      error: (err) => {
        console.log("Error in delete ");
      },
    })
    alert("Successfully Deleted");
  }

  editdata(data: any) {
    this.todos = data;
    this.isedit = true;
  }

  updateuserdata() {
    this.isedit = !this.isedit;
    this.service.updateusers(this.todos.id, this.todos).subscribe({
      next: (res) => {
        this.getUsersdata();
        this.cleardata();
      }, error: (err) => {
        console.log("Error in update " + err);
      }
    })
    // this.getUsersdata();
  }
  cleardata() {
    this.Todos.firstname = "",
      this.Todos.lastname = "",
      this.Todos.email = "",
      this.Todos.password = "",
      this.Todos.city = "",
      this.Todos.zip = ""
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
