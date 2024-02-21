import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetService } from '../budget_Api/budget.service';

@Component({
  selector: 'app-budget-tracker',
  templateUrl: './budget-tracker.component.html',
  styleUrls: ['./budget-tracker.component.css']
})
export class BudgetTrackerComponent implements OnInit {

  editid = false
  Records: any;
  records = new Records();
  budget: Budget = {
    totalBudget: 0,
    balance: 0,
    totalExexpense: 0
  };
  Budget: any
  getExpenseAmount: any;
  // budget: Budget = new Budget();
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.allRecord();
  }

  // totalAmount = 0;
  // totalBudget = 0;
  // expenses = [
  //   {
  //     name: '',
  //     amount: 0
  //   },
  // ];
  // expenseAmount = 0;
  // totalexpenseAmount = 0;
  // expenseName = '';
  // balance = this.totalBudget - this.expenses.reduce((sum, expense) =>
  //   sum + expense.amount, 0
  // );

  // 2

  // setBudget(budgetdata: any) {
  //   // console.log(budgetdata);
  //   this.budgetService.addbudgetamount(budgetdata).subscribe({
  //     next: (res) => {
  //       console.log(res);

  //     }
  //   })
  //   // this.totalBudget = this.totalAmount;
  //   // this.balance = this.totalBudget - this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  // }



  //Budget

  // setBudget(budgetAmount: any) {
  //   this.budgetService.addbudgetamount(budgetAmount).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     }, error: (error) => {
  //       console.log("error in set Budget " + error);
  //     }
  //   })
  //   console.log("errrors");

  //   // this.totalBudget = this.totalAmount;
  //   // this.balance = this.totalBudget - this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  // }


  // setBudget() {
  //   const body = { totalBudget: this.budget.totalBudget }; // Prepare the body object
  //   this.budgetService.addbudgetamount(body).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       // Optionally, update any UI or perform additional actions after successful response
  //     },
  //     error: (error) => {
  //       console.log("error in set Budget " + error);
  //     }
  //   });
  // }
  
  setBudget() {
    const body = { totalBudget: this.budget.totalBudget };

    this.budgetService.addbudgetamount(body).subscribe({
      next: (res) => {
        console.log(res);
        // Update UI with response data, if needed
        this.updateLocalStorage(); // Store in localStorage for persistence
      },
      error: (error) => {
        console.error("Error in setBudget:", error);
        // Handle errors appropriately, e.g., display user-friendly messages
      }
    });
  }
  updateLocalStorage() {
    localStorage.setItem('budgetAmount', JSON.stringify(this.budget.totalBudget));
  }

  addExpense(expensesdata: any) {
    this.budgetService.addexpensesamount(expensesdata).subscribe({
      next: (response) => {
        this.allRecord();
        console.log(this.records.expenseAmount);
      }, error: (err) => {
        console.log("addExpense" + err);
      }
    })
    // this.balance = this.totalBudget - this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    // this.totalexpenseAmount = this.totalBudget - this.balance;
  }
  allRecord() {
    this.budgetService.getbudgetamount().subscribe({
      next: (res) => {
        this.Records = res;
      }, error: (error) => {
        console.log("addRecord", error);
      }
    })
  }
  deletedata(data: any) {
    this.budgetService.deleteexpense(data).subscribe({
      next: (res) => {
        console.log('succesed');
        this.allRecord();
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }
  editdata(data: any) {
    this.records = data;
    this.editid = true
  }

  updatedata() {
    this.editid = false;
    this.budgetService.updateexpense(this.records.id, this.records).subscribe({
      next: (res) => {
        console.log(res);
        this.allRecord();

      }, error: (err) => {
        console.log("updata side error", err);
      }

    })
    this.cleardata();
  }
  cleardata() {
    this.Records.expenseName = "",
      this.Records.expenseAmount = ""
  }




}
export class Records {
  id!: string;
  expenseName!: string;
  expenseAmount!: number;
}
export class Budget {
  totalBudget !: number;
  totalExexpense!: number;
  balance!: number;
}

