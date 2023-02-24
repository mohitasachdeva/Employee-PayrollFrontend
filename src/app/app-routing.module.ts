import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Employee/form/form.component';
import { HomeComponent } from './Employee/home/home.component';

const routes: Routes = [
  
  { path: 'form', component: FormComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
