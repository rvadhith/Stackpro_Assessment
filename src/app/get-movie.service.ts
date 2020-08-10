import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetMovieService {

  constructor(
    private http:HttpClient
  ) { }

  getTheMovie(){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=a5cb974b115d0e92d072b0d48cace70f&query=Jack+Reacher');
  }

}
