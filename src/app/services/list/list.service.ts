import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  id : number;
  idChange : Subject<number> = new Subject<number>();
  constructor() { }

  getId(id) {
    this.id = id;
    this.idChange.next(this.id)
  }
}
