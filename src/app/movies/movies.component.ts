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

  getMovie(movie){
    console.log(movie.value);
    this.mov.getTheMovie().subscribe(data => this.movieResult = data);
    console.log(this.movieResult);
  }
  

}
