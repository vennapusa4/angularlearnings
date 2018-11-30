import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent  {

  constructor() { }
  loginText = 'Login';
  signUpText = 'Sign Up'; 
  lessons = ['Lesson 1', 'Lessons 2'];
  isavailable=true;

  login() {
      console.log('Login');
  }

  signUp() {
      console.log('Sign Up');
  }
}
