import { Component, OnInit } from '@angular/core';

class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }
newHero() {
  this.model = new Hero(42, '', '');
}
}

