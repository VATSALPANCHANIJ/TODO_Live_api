import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStoregeComponent } from './local-storege/local-storege.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PrecticeCurdComponent } from './prectice-curd/prectice-curd.component';
import { HttpClientModule } from '@angular/common/http';

import { TaskComponent } from './task/task.component';
import { BudgetTrackerComponent } from './budget-tracker/budget-tracker.component';
import { ParentComponent } from './parent/parent.component';
@NgModule({
  declarations: [
    AppComponent,
    LocalStoregeComponent,
    PrecticeCurdComponent,
    TaskComponent,
    BudgetTrackerComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
