import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  id : number;
  value : number;
  valueChange : Subject<number> = new Subject<number>();
  idChange : Subject<number> = new Subject<number>();
  constructor() { }

  getId(id) {
    this.id = id;
    this.idChange.next(this.id)
  }

  getValueInformation(value){
    this.value = value;
  }
}
