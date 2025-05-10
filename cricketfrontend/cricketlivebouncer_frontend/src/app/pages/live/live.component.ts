import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error, log } from 'console';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {

  liveMatches : any;


  constructor(private apiService:ApiCallService){

  }
  ngOnInit() {
    this.getLiveMatches();
  }

  getLiveMatches(){
    this.apiService.getLiveMatches().subscribe({
      next:data=>{
        console.log(data)
        this.liveMatches =data;
      },
      error:error => {
        console.log(error)
      }
    })

  }

}
