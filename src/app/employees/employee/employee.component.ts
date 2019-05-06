import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/shared/employee.model';
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
  emp = [];
  update = [];
  constructor(private service: EmployeeService, private firestore: AngularFirestore) {
  }
  submit() {
    this.data = Object.assign({}, { name: this.name, empCode: this.empCode, position: this.position });
    this.firestore.collection('employees').add(this.data);
    this.update.push(false);
    this.name = '';
    this.empCode = '';
    this.position = '';
  }
  getEmp() {
    return this.firestore.collection('employees').snapshotChanges().subscribe(actionArray => {
     this.emp = actionArray.map(item => {
       return {
        id: item.payload.doc.id,  
        ...item.payload.doc.data()} as Employee;
      });
    });
  }
  updateEmp(id,i){
    this.firestore.doc('employees/' + id).update({name: this.name,position: this.position,
    empCode: this.empCode});
    this.update[i] = false ;
    this.name = '';
    this.empCode = '';
    this.position = '';
  }
  upd(i){
    this.update[i] = true;
  }
  deleteEmp(id){
    this.firestore.doc('employees/' + id).delete();
    this.update.pop();
  }

  ngOnInit() {
  }

}
