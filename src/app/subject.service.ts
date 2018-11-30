import { Injectable } from '@angular/core';
import { Subject,ReplaySubject, observable } from 'rxjs/index';import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
   subject :Subject<any>=new Subject();
    myObservable = of(1, 2, 3);
    a=new Observable()
     sequence = new Observable(this.sequenceSubscriber);
  constructor() {
    
   }
   sendmessage1(data){
     debugger;
    this.subject.next(data);
   }
   receivemessage1():Observable<any>{
    return this.subject.asObservable();
   }

   sendmessage(data)
   {
    const mySubject = new ReplaySubject(2);

    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);
    mySubject.next(4);
    mySubject.next(5);
    mySubject.subscribe(x => {
      console.log('From 1st sub:', x);
    });
    
   
    
    mySubject.subscribe(x => {
      console.log('From 2nd sub:', x);
    });
    return of("hh");

   }
   receivemessage():any{
    this.sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
    return this.myObservable;
   }

    sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(11);
  
    observer.complete();
   
    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return {unsubscribe() {}};
  }
   
  


}
