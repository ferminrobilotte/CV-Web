import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list/list.service';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss']
})
export class InformationPageComponent implements OnInit {
  informationValue: number;

  constructor(private listService : ListService) { }

  ngOnInit() {
      this.informationValue = this.listService.value;
  }

}
