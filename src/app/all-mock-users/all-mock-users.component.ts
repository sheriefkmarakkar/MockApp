import { Component, OnInit } from '@angular/core';
import {ServService} from '../serv.service'
import { MatDialog } from '@angular/material/dialog';
import { SingleUserComponent } from '../single-user/single-user.component';

@Component({
  selector: 'app-all-mock-users',
  templateUrl: './all-mock-users.component.html',
  styleUrls: ['./all-mock-users.component.scss']
})
export class AllMockUsersComponent implements OnInit {
result: any;
  constructor(private s:ServService,private dialog:MatDialog) {
    this.s.getAll().subscribe(result=> {
      console.log(result)  
  
    
    this.result=result;
    console.log(this.result) 
     });
     
  
   }
   singleUser(id:any){

  }
  d:any
  openDialog(id:any): void {
    this.s.getU(id).subscribe(res=>{
    this.d=res;
    console.log(this.d)
    console.log(this.d.data.userName)

    })
    let dialogRef = this.dialog.open(SingleUserComponent, {
      width: '500px',
      data:this.d.data
      
    });
    //console.log(dialogRef.data)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
  data:any;
  deleteUser(id:any){
this.s.deleteU(id).subscribe(result => console.log(result),
(error) => {
   // error logic here
   alert("failed")
 },
()=> {
   // request success logic here
   alert("Data Deleted")
 });

  }
  ngOnInit(): void {


  }

}
