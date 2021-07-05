import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES,Router, Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CreateMockUserComponent } from './create-mock-user/create-mock-user.component';
import {AllMockUsersComponent} from './all-mock-users/all-mock-users.component'
import {SingleUserComponent} from './single-user/single-user.component'
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {ServService} from './serv.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
const approutes : Routes = [
  {path:"",component:AppComponent},

  {path:"create",component:CreateMockUserComponent},
  {path:"all", component:AllMockUsersComponent},
  {path:"single", component:SingleUserComponent},

  ]
@NgModule({
  declarations: [
    AppComponent,
    CreateMockUserComponent,
    AllMockUsersComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
