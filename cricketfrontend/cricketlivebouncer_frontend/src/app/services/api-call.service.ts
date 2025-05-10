import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient: HttpClient) { }

  getAllMatches(){

    return this.httpClient.get(`${environment.apiUrl}/match`)

  }

  getLiveMatches(){

    const url = `${environment.apiUrl}/match/live`;
    // console.log('GET URL:', url);
    return this.httpClient.get(url);


  }

  getPointTable(){
    return this.httpClient.get(`${environment.apiUrl}/match/point-table`)


  }









}
