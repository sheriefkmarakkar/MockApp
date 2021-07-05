import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {ServService} from '../serv.service'

@Component({
  selector: 'app-create-mock-user',
  templateUrl: './create-mock-user.component.html',
  styleUrls: ['./create-mock-user.component.scss']
})
export class CreateMockUserComponent implements OnInit {
 sub=false;
 res:any;
  constructor(private fb:FormBuilder,private s:ServService) { }
createForm=this.fb.group({
username:['',[Validators.required,Validators.maxLength(50)]],
email:['',[Validators.required,Validators.email,Validators.maxLength(50)]],
phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
gender:['',Validators.required],
age:['',[Validators.required,Validators.pattern("^[0-9]*$")]]
})
  ngOnInit(): void {
  }
  get f(){
    return this.createForm.controls;
  }
  
onSubmit(){
  this.sub=true;
console.log(this.f)
if(this.createForm.valid)
{
  //alert("ncdskn")
this.s.postData(this.createForm.value).subscribe(result => console.log(result),
(error) => {
   // error logic here
   alert("failed")
 },
()=> {
   // request success logic here
   alert("Data Added")
 });

}
}

}
