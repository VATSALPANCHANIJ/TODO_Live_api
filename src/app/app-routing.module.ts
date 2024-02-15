import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalStoregeComponent } from './local-storege/local-storege.component';
const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
