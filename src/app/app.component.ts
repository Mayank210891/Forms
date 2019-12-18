import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form',{static:false}) signUpForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   username: 'Mayank',
    //   email: 'mayankbisht21@yahoo.com',
    //   gender: 'Male',
    //   secret: 'pet',
    // })

    this.signUpForm.form.patchValue({
      username: 'Mayank Bisht'
    })
  }
  genderOptions=['Male', 'Female'];
  
}
