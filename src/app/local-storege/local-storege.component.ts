import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-local-storege',
  templateUrl: './local-storege.component.html',
  styleUrls: ['./local-storege.component.css']
})
export class LocalStoregeComponent implements OnInit {

  isInEditMode: boolean = false;

  obj: any = {
    id: Math.floor(Math.random() * 1000),
    email: '',
    password: '',
    address: '',
    city: '',
    zip: ''
  }
  alldata: any[] = [];

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getdatalocalstorege();
  }
  getdatalocalstorege() {
    const data = localStorage.getItem("record");
    if (data != null) {
      this.alldata = JSON.parse(data);
    }
  }
  cleardata() {
    this.obj.id = Math.floor(Math.random() * 1000);
    this.obj.email = "";
    this.obj.password = "";
    this.obj.address = "";
    this.obj.city = "";
    this.obj.zip = "";
  }
  submitdata() {
    if (!this.obj.email || !this.obj.password || !this.obj.address || !this.obj.city || !this.obj.zip) {
      this.toastr.error("Please fill in all fields.");
      return;
    }
    const data = localStorage.getItem("record");
    if (data === null) {
      this.alldata.push(this.obj);
      localStorage.setItem("record", JSON.stringify(this.alldata));
    } else {
      this.alldata = JSON.parse(data);
      this.alldata.push(this.obj);
      localStorage.setItem("record", JSON.stringify(this.alldata));
    }
    this.toastr.success('Record saved successfully', 'Success');
    this.getdatalocalstorege();
    this.cleardata();
  }
  deletedata(id: any) {
    // console.log(id);
    debugger
    this.alldata = this.alldata.filter(item =>
      item.id !== id
    )
    localStorage.setItem("record", JSON.stringify(this.alldata));
    this.toastr.success('Record deleted successfully', 'Success');
  }
  editedata(id: any) {
    this.isInEditMode = true;
    debugger
    const selectedItem = this.alldata.find(item => item.id === id);
    if (selectedItem) {
      this.obj = {
        id: selectedItem.id,
        email: selectedItem.email,
        password: selectedItem.password,
        address: selectedItem.address,
        city: selectedItem.city,
        zip: selectedItem.zip
      };
    } else {
      console.error("ID not found" + id);
    }
  }
  updateData() {
    debugger;
    this.alldata = this.alldata.map(item => {
      if (item.id === this.obj.id) {
        return this.obj; // Update the item
      } else {
        return item; // Keep the item unchanged
      }
    });

    localStorage.setItem("record", JSON.stringify(this.alldata)); // Update localStorage
    this.toastr.success('Record updated successfully', 'Success'); // Show success toast
    this.isInEditMode = false;
    this.getdatalocalstorege();
    this.cleardata();
  }

}


