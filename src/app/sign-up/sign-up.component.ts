import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User = new User("", "", "","" )



  onSubmit(): void {
    // form submitted
    console.log(this.user);



}};


export class User {
  firstName: string;
 lastName: string;
  email: string;
  password: string;

  constructor(firstName: string, lastName: string, email: string, password: string) {
      this.firstName = firstName;
      this.lastName = lastName
      this.email = email
      this.password = password
  }

}
