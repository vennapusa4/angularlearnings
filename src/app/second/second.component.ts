import { Component, OnInit } from '@angular/core';
import { SubjectService } from "../subject.service";
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

 
  constructor( private sub:SubjectService) {  this.sub.receivemessage().subscribe(
    (notificacion:string) => {
      debugger;
      this.title=notificacion;
     }
  );}
  title="";

 ngOnInit() {
  
  
 }
}
