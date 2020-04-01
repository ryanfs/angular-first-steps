import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private GITHUB_API_URL = "https://jobs.github.com/positions.json";

  constructor(private http: HttpClient) { }
    // Note: the following works fine
    // return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=11211,us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial');
    // Doesnt seem to be a cors policy on this weather api... so this request works without the cors-anywhere workaround

  public getJobs(page, search) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/${this.GITHUB_API_URL}?page=${page}&search=${search}`);
  }
}

