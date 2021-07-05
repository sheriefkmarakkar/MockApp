import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private h:HttpClient) { }
  public postData(f:any){
    //alert(f)
    return this.h.post("https://dev.digisuvidhacentre.com/Profile/api/MockUser",{UserName:f.username,Email:f.email,Phone:f.phone,Gender:f.gender,Age:f.age})
  }
  public getAll(){
    return this.h.get("https://dev.digisuvidhacentre.com/Profile/api/MockUser")
  }
  public deleteU(id:any){
    console.log(id)
    return this.h.delete("https://dev.digisuvidhacentre.com/Profile/api/MockUser/Delete/"+id)
  }
  public getU(id:any){
    return this.h.get("https://dev.digisuvidhacentre.com/Profile/api/MockUser/"+id)
  }
}
