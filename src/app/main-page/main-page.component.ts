import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListService } from '../services/list/list.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  id: number;
  subscription: Subscription;
  constructor(private listService : ListService) { }

  ngOnInit() {
    this.id = 1;
    this.subscription = this.listService.idChange.subscribe(id =>{
      this.id = id
    })
  }

}
