import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name = '';
  empCode = '';
  position = '';
  data = {};
  emp: any;
  constructor(private service: EmployeeService, private firestore: AngularFirestore) {
  }
  submit() {
    this.data = Object.assign({}, { name: this.name, empCode: this.empCode, position: this.position });
    this.firestore.collection('employees').add(this.data);
    console.log(this.name, this.data);
  }
  getEmp() {
    return this.firestore.collection('employees').snapshotChanges().subscribe(actionArray => {
      this.emp = actionArray.map(item => {
        console.log(item.payload.doc.data());
      });
    });
  }
  ngOnInit() {
  }

}
