import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
@Component({
  selector: 'app-meal-component',
  templateUrl: './meal-component.component.html',
  styleUrls: ['./meal-component.component.css']
})
export class MealComponentComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  selected: number;
  ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) =>{
      this.selected = +(params.get('id'));
      console.log(this.selected);
    });
  }
}
