import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable,Subject } from 'rxjs';
import { of,from   } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Observable<any>> {

  constructor() { }
  resolve() {
   // return of('Hello Alligator!');
   var array = [10, 20, 30];
       return of(1,2,3);
  }
}
