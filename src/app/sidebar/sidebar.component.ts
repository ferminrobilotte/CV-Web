import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list/list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  id : number;
  constructor(private listService : ListService) { }

  ngOnInit() {
    this.id = 1;
    this.addClass(this.id);
  }

  addClass(id: any) {
    this.id = id;
    this.listService.getId(id);
  }

}
