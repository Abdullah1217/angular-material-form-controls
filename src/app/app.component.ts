import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private formBuilder: FormBuilder){}

  profileForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    dob:[''],
    gender:['']
  });
}
  export class SnackBarOverviewExample {
    constructor(private _snackBar: MatSnackBar) {}
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
  }

