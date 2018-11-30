import { Component, OnInit } from '@angular/core';
import { SubjectService } from "../subject.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor( private sub:SubjectService) { }
   title="firffst"

  ngOnInit() {
    this.sub.sendmessage(this.title);
  }

}
