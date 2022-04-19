import { Component, OnInit, Input } from '@angular/core';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-gitrepo',
  templateUrl: './gitrepo.component.html',
  styleUrls: ['./gitrepo.component.css']
})
export class GitrepoComponent implements OnInit {

  repos: any;
  @Input() newUsername:string=''
  constructor(private reposervice: RepoService) {}

  repoSearch() {
    this.reposervice.getRepo(this.newUsername).then((result) => {
      this.repos = result;
    });

    console.log(this.newUsername)
    console.log("this.newUsername");
  }


  ngOnInit(): void {
    this.repoSearch()
  }
}

