import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list/list.service';
import { GitRepoService } from '../services/git-repo/git-repo.service';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss']
})
export class InformationPageComponent implements OnInit {
  informationValue: number;
  repos: {};

  constructor(private listService : ListService, private gitRepoService: GitRepoService) { }

  ngOnInit() {
      this.informationValue = this.listService.value;

      if (this.informationValue === 6){
        this.gitRepoService.getRepos()
          .subscribe(data => this.repos = data)
      }
  }


}
