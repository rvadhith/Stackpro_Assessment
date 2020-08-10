import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { GetMovieService } from '../get-movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent  {

  constructor(private mov: GetMovieService){}
  public movieResult = {};
  public movieResultArr = [];
  public movieTitle = [];
  public movieRating = [];
  public movieOverview = [];


  makeApiCall(movie){
    this.mov.getTheMovie(movie.value).subscribe(data => this.movieResult = data);
    this.movieResultArr.push(this.movieResult['results']);
    for(var i = 0; i < this.movieResultArr[1].length; i++){
         this.movieTitle.push(this.movieResultArr[1][i]['title']);
         this.movieRating.push(this.movieResultArr[1][i]['vote_average']);
         this.movieOverview.push(this.movieResultArr[1][i]['overview']);
   }
   console.log(this.movieTitle);
   console.log(this.movieRating);
   console.log(this.movieOverview);
  }
  
  

}
