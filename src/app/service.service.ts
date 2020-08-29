import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private httpClient: HttpClient) { }

  public GetAllData(): Observable<any>{
    let url='https://api.spaceXdata.com/v3/launches?limit=100'
    return this.httpClient.get(url);
  }
  public FillterByYear(launch_success,land_success,launch_year):Observable<any>{
    let url='https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+launch_success+'&land_success='+land_success+'&launch_year='+launch_year
    return this.httpClient.get(url);
  }
  public LaunchSucc(launch_success):Observable<any>{
    let url='https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+launch_success
    return this.httpClient.get(url)
  }

  public LandSucc(launch_success,land_success):Observable<any>{
    let url='https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+launch_success+'&land_success='+land_success
    return this.httpClient.get(url)
  }

}
