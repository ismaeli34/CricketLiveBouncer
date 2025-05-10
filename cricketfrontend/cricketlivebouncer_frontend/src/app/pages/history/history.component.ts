import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { log } from 'console';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  allMatch:any;

  constructor(private apiService: ApiCallService){
  }
  ngOnInit() {
    this.apiService.getAllMatches().subscribe({
      next:data =>{
        this.allMatch = data
        console.log(this,this.allMatch);
      },
      error:error =>{
        console.log(error);
      }
    })
  }

}
