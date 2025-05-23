import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-point-table',
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit {

  pointTable:any;
  tableHeading:any;

  constructor(private apiService:ApiCallService){

  }
  ngOnInit(): void {
    this.apiService.getPointTable().subscribe({
      next:data => {
        this.pointTable = data;
        console.log(this.pointTable);
        this.tableHeading=[...this.pointTable[0]]
        console.log(this.tableHeading);
      },
      error:error =>{
        console.log(error);

      }
    })
  }

}
