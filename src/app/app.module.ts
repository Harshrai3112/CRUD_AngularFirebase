import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire' ;
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { EmployeesComponent} from 'src/app/employees/employees.component';
import { EmployeeComponent } from 'src/app/employees/employee/employee.component';
import { EmployeeListComponent } from 'src/app/employees/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fireConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
